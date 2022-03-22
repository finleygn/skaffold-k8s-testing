FROM denoland/deno:1.20.1
USER deno

WORKDIR /app

COPY . .

RUN deno cache main.ts
CMD deno run --allow-net --allow-env main.ts