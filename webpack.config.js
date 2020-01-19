let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', //模式 webpack默认两种：development production
  entry: './src/index.js', // 打包入口文件
  output: {
    filename: 'ndr.js', //打包文件名
    path: path.resolve(__dirname, 'ndr') // 路径必须是一个绝对路径
  },
  devServer: {
    port: 3000,
    progress: true,
    contentBase: './ndr'
    // open: true
  },
  module: { // 模块 打包各种文件的
    // loader特点：希望单一
    // loader用法：字符串（针对一个loader） 多个loader用[]
    // loader顺序：默认从右向左执行
    // loader如要扩展可以写成对象形式
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            
          }
        },
        'css-loader' // @import 解析路径 
      ]
    },{
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            
          }
        },
        'css-loader', // @import 解析路径 
        'less-loader' // 把less 转化为css
      ]
    }]
  },
  plugins: [ // 放着所有webpack的插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ]
}