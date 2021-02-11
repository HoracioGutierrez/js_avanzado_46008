//module.exports.mode = "development"


module.exports = {
    mode : "development",
    module : {
        rules : [
            {
                test : /\.js$/,
                use : "babel-loader"
            }
        ]
    }
}