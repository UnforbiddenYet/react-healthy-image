var webpack = require("webpack");
var path = require("path");

module.exports = {
	debug: false,
	devtool: 'module-source-map',
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.min.js",
		libraryTarget: "umd",
		library: "[name]"
	},
	externals: {
		"react": {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React"
		},
		"react-dom": {
			"commonjs": "react-dom",
			"commonjs2": "react-dom",
			"amd": "react-dom",
			"root": "ReactDOM"
		},
	},
	module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};
