import { createApp, createRouter } from "./deps.ts";

import "./bundle.ts";

const app = createApp();
app.route(
  "/",
  (() => {
    const router = createRouter();
    router.get("app.bundle.js", async (req) => {
      await req.sendFile("./docs/app.bundle.js");
    });
    router.get(new RegExp(".*"), async (req) => {
      await req.sendFile("./docs/index.html");
    });
    return router;
  })(),
);
app.listen({ port: 8888 });
