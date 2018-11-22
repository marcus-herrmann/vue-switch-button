const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./src/main.js",

    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" },
            { test: /\.vue$/, use: "vue-loader" },
            { test: /\.css/, use: ["vue-style-loader", "css-loader"] }
        ]
    },
    context: __dirname,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "vue-switch-button.js"
    },
    plugins: [new VueLoaderPlugin()]
};

if (process.env.NODE_ENV === "production") {
    module.exports.devtool = "#source-map";
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
