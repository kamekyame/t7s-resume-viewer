import { denoPlugin, esbuild } from "./deps.ts";

const _bundle = await esbuild.build({
  entryPoints: ["./pages/route.tsx"],
  plugins: [denoPlugin({ importMapFile: "./pages/import-map.json" })],
  bundle: true,
  outfile: "./docs/app.bundle.js",
  minify: true,
});
