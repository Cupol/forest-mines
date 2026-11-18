import { DurableObject } from "cloudflare:workers";

// Keep the deployed class available for the existing Durable Object migration.
export class ArenaRoom extends DurableObject {
  fetch(): Response {
    return new Response(null, { status: 410 });
  }
}
