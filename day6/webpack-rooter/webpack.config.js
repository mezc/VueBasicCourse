const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join("./src/index.html"),
            filename:"index.html"
        })
    ],
    // resolve:{
    //     alias:{
    //         // "vue$":"vue/dist/vue.js"
    //     }
    // },
    module:{
        rules:[
    //         {test:/\.css$/,use:["style-loader","css-loader"]},
    //         {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
    //         {test:/\.(jpg|png|tiff|jpge)$/,use:"url-loader?limit=7200&name=[hash:8]-[name].[ext]"},
    //         {test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},
    //         {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
            {test:/\.vue$/,use:"vue-loader"}
        ]
    }
}