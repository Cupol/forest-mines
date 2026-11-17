import { DurableObject } from "cloudflare:workers";

type Ranking = {name:string; wins:number; best:number|null};

export class Leaderboard extends DurableObject<unknown> {
  constructor(ctx:DurableObjectState,env:unknown){
    super(ctx,env);
    this.ctx.storage.sql.exec(`
      CREATE TABLE IF NOT EXISTS awards (match_id TEXT PRIMARY KEY);
      CREATE TABLE IF NOT EXISTS players (
        profile TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        wins INTEGER NOT NULL,
        best INTEGER
      );
      CREATE INDEX IF NOT EXISTS ranking_wins ON players (wins DESC, name);
    `);
  }

  award(match:string,profile:string,name:string,best:number|null,lowerIsBetter:boolean){
    const sql=this.ctx.storage.sql;
    this.ctx.storage.transactionSync(()=>{
      const insert=sql.exec("INSERT OR IGNORE INTO awards (match_id) VALUES (?)",match);
      if(insert.rowsWritten===0)return;
      sql.exec(`
        INSERT INTO players (profile,name,wins,best) VALUES (?,?,1,?)
        ON CONFLICT(profile) DO UPDATE SET
          name=excluded.name,
          wins=players.wins+1,
          best=CASE
            WHEN excluded.best IS NULL THEN players.best
            WHEN players.best IS NULL THEN excluded.best
            WHEN ? THEN MIN(players.best,excluded.best)
            ELSE MAX(players.best,excluded.best)
          END
      `,profile,name,best,lowerIsBetter?1:0);
    });
  }

  top(mode:string):Ranking[]{
    const order=mode==="reaction"?"best ASC NULLS LAST":mode==="typing"?"best DESC NULLS LAST":"name COLLATE NOCASE";
    return this.ctx.storage.sql.exec<Ranking>(
      `SELECT name,wins,best FROM players ORDER BY wins DESC, ${order}, name COLLATE NOCASE, profile LIMIT 20`
    ).toArray();
  }
}
