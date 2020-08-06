import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import {
	uglify
} from "rollup-plugin-uglify";

export default {
	input: "src/index.js",
	output: {
		file: "dist/technoservs.js",
		format: "cjs",
	},
	external: ["axios"],
	plugins: [
		babel({
			exclude: "node_modules/**",
		}),
		resolve(),
		commonjs(),
		uglify(),
	],
};
