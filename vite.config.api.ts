import { defineConfig } from "vite";
import path from "path";

// API build configuration — bundles backend/index.ts into a single file
// for Vercel serverless functions (avoids ESM bare-import resolution issues)
export default defineConfig({
  ssr: {
    noExternal: ["cors", "dotenv"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "backend/index.ts"),
      name: "api",
      fileName: "server",
      formats: ["es"],
    },
    outDir: "dist/api",
    target: "node22",
    ssr: true,
    rollupOptions: {
      external: [
        // Node.js built-ins
        "fs",
        "path",
        "url",
        "http",
        "https",
        "os",
        "crypto",
        "stream",
        "util",
        "events",
        "buffer",
        "querystring",
        "child_process",
        // npm packages available in node_modules on Vercel
        "express",
        "@supabase/supabase-js",
      ],
      output: {
        format: "es",
        entryFileNames: "[name].mjs",
      },
    },
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
