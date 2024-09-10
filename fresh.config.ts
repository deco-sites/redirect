import { defineConfig } from "$fresh/server.ts";
import plugins from "deco/plugins/fresh.ts";
import manifest from "./manifest.gen.ts";

export default defineConfig({
  plugins: plugins({ manifest }),
});
