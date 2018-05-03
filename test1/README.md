# 项目里安装webpack
    npm install webpack -D 
    或
    yarn add webpack -D

# 安装webpack-cli
    yarn add webpack webpack-cli -D

# 安装webpack静态服务器依赖
    yarn add webpack webpack-dev-server -D

# 安装css处理的插件
    yarn add webpack style-loader css-loader -D

# 处理图片的插件
    yarn add webpack file-loader url-loader -D

# 安装html-webpack-plugin
    yarn add html-webpack-plugin -D

# 如果需要单独把 CSS 文件分离出来，我们需要使用 extract-text-webpack-plugin 插件
    yarn add webpack extract-text-webpack-plugin@next -D

# 页面中引用img的方式
    yarn add webpack html-withimg-loader -D

# 字体图标和svg图片都可以通过file-loader来解析

# 添加css3前缀
    yarn add webpack postcss-loader autoprefixer -D

# 转义ES6
    yarn add babel-core babel-loader babel-preset-env babel-preset-stage-0 -D

# 清理插件clean-webpack-plugin
    yarn add webpack clean-webpack-plugin -D
    


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