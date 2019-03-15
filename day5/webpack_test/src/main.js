// import ** form *** 是es6导入模块的方式
import $ from "jquery"
// 使用import语法导入css样式表
import './css/index.css'
import "./css/index.less"
import "./css/index.scss"

// webpack只能打包处理js类型文件，要处理非js类型文件，需要安装第三方loader加载器，
// 1.处理css文件，安装cnpm i style-loader css-loader -D
// 2.webpack.config.js里新增一个配置节点，module，这个module对象上有rules属性，是数组，这个数组中存放了第三方文件的匹配和处理规则。



$(function(){
    $("li:odd").css("backgroundColor","pink")
    $("li:even").css("backgroundColor","yellow")
})