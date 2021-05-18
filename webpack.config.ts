import * as path from "path";
import { Configuration } from "webpack";


const config: Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    publicPath: '/',
  },
  resolve: {
    // Add ".ts" as resolvable extension.
    extensions: [".ts", ".js"],
  },
  target: "node",
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts?$/, loader: "ts-loader" },
    ],
  },
};

export default config;
