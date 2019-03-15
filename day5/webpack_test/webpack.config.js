
const path = require("path")
// 第二种热更新方法启用的第2步
const webpack = require("webpack")

//导入在内存中生成html页面的插件
//只要是插件，都一定要放到plugins节点中去
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:"boundle.js"
    },
    // 第二种启动热更新的方式
    devServer:{
        open:true,//自动打开浏览器
        port:3000,//设置启动时候运行端口
        contentBase:"src",//指定托管的根目录
        hot:true//启用热更新
      },
    plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({//创建一个在内存中生成html页面的插件
        template:path.join(__dirname,"./src/index.html"),//指定模版页面，根据路径，生成内存中页面
        filename:"createIndex.html"//指定生成页面的名称
    })
    ],
    module:{//配置所有第三方模块加载器
        rules:[
            {
                test:/\.css$/,//正则匹配规则
                use:["style-loader","css-loader"]//处理顺序：从后往前，先处理css-loader,再处理style-loader
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            { 
                test:/\.scss$/,
                use:["style-loader","css-loader","scss-loader"]
            }
        ]

    }
}