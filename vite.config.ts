/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		svgr(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./src/testing/setup.ts"],
		globals: true,
		exclude: [
			"**/node_modules/**",
			"**/dist/**",
			"**/e2e/**",
			"**/playwright-report/**",
			"**/test-results/**",
		],
	},
});
