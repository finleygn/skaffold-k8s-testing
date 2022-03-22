import { serve } from "https://deno.land/std@0.130.0/http/server.ts";

const port = Deno.env.get("PORT");
const backendUrl = Deno.env.get("BACKEND_URL");

if(!backendUrl || !port) {
  throw Error("invalid app configuration")
}

const handler = async (): Promise<Response> => {
  console.log("Request received")

  const response = await fetch(backendUrl as string);
  const backendIdentfier = await response.text();

  return new Response(JSON.stringify({
    gateway: true,
    backend: {
      identfier: backendIdentfier
    }
  }), { status: 200 });
};

console.log(`gateway running @ http://localhost:${port}/`);
await serve(handler, { port: Number(port) });
