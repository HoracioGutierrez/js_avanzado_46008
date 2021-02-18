//module.exports.mode = "development"

const htmlWebpakcPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    mode : "development",
    devtool : "source-map",
    devServer : {
        open : true
    },
    /* entry : "./src/index.js" , */
    /* output : {
        filename : "main.js",
        path : "dist"
    }, */
    module : {
        rules : [
            {
                test : /\.js$/,
                use : "babel-loader"
            },
            {
                test : /\.css$/ ,
                /* use : ["style-loader","css-loader"] */
                use : [miniCssExtractPlugin.loader,"css-loader"]
            }
        ]
    },
    plugins : [
        new htmlWebpakcPlugin({
            template : "./src/index.html",
            minify : {
                collapseWhitespace : true,
                removeAttributeQuotes : true,
                removeComments : true
            }
        }),
        new miniCssExtractPlugin()
    ]
}