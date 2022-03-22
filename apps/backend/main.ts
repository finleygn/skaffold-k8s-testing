import { serve } from "https://deno.land/std@0.130.0/http/server.ts";

const port = Deno.env.get("PORT");
const identifier = Deno.env.get("IDENTIFIER");

const handler = (): Response => {
  console.log("Request received");
  return new Response(
    identifier,
    {
      status: 200,
      headers: {
        connection: "close" // Don't keep open TCP connection
      }
    }
  );
};

console.log(`backend running @ http://localhost:${port}/`);
await serve(handler, { port: Number(port) });