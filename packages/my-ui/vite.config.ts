import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			plugins: [["@swc/plugin-emotion", {}]],
		}),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, "src/index.ts"),
			name: "MyUI",
			formats: ["es", "umd"],
			// the proper extensions will be added
			// fileName: (format) => `my-ui.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"@emotion/react": "EmotionReact",
					"@emotion/styled": "EmotionStyled",
				},
			},
		},
	},
});
