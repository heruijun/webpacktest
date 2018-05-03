# 项目里安装webpack
    npm install webpack -D 
    或
    yarn add webpack -D

# 安装webpack-cli
    yarn add webpack webpack-cli -D

# 安装webpack静态服务器依赖
    yarn add webpack webpack-dev-server -D

# 安装html-webpack-plugin
    yarn add html-webpack-plugin -D

# 如果需要单独把 CSS 文件分离出来，我们需要使用 extract-text-webpack-plugin 插件


# 基本配置
```
module.exports = {
    entry: '',               // 入口文件
    output: {},              // 出口文件
    module: {},              // 处理对应模块
    plugins: [],             // 对应的插件
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
```