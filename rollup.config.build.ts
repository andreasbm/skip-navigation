import { clean, copy, importStyles } from "@appnest/web-config";
import ts from "@wessberg/rollup-plugin-ts";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { join, resolve } from "path";
import precss from "precss";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import progress from "rollup-plugin-progress";
import pkg from "./package.json";

const folders = {
	src: resolve(__dirname, "src/lib"),
	dist: resolve(__dirname, "dist")
};

const files = {
	src_index: join(folders.src, "index.ts"),
	src_skip_anchor: join(folders.src, "skip-anchor.ts"),
	src_skip_button: join(folders.src, "skip-button.ts"),
	src_package: resolve("package.json"),
	src_readme: resolve("README.md"),
	dist_package: join(folders.dist, "package.json"),
	dist_readme: join(folders.dist, "README.md")
};

const plugins = () => [
	progress(),
	nodeResolve(),
	importStyles({
		plugins: [
			precss(),
			autoprefixer(),
			cssnano()
		]
	}),
	ts({
		transpiler: "typescript",
		tsconfig: "tsconfig.build.json",
		exclude: ["node_modules/**/*.*"],
		browserslist: false
	}),
	commonjs({
		include: "**/node_modules/**"
	})
];

export default {
	input: {
		index: files.src_index,
		"skip-anchor": files.src_skip_anchor,
		"skip-button": files.src_skip_button,
	},
	output: [
		{
			format: "esm",
			dir: folders.dist
		}
	],
	treeshake: false,
	plugins: [
		clean({
			targets: [
				folders.dist
			]
		}),
		copy({
			resources: [
				[files.src_package, files.dist_package],
				[files.src_readme, files.dist_readme]
			]
		}),
		...plugins()
	],
	external: [
		...(Object.keys(pkg.dependencies || {})),
		...(Object.keys(pkg.devDependencies || {})),
		"tslib"
	]
};