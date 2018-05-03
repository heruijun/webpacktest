const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 拆分css样式的插件
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // ------------ 以下是单文件输出 ------------
    // entry: {
    //     main: [
    //         './src/page1.js',
    //         './src/page2.js',
    //         './src/page3.js'
    //     ]
    // },

    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js',
    // },

    // ------------ 以下是多文件输出 ------------
    entry: {
        page1: './src/page1.js',
        page2: './src/page2.js',
        page3: './src/page3.js',
        login: './src/login.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],   // 优先级：js > vue > json
        alias: {
            utils$: path.resolve(__dirname, 'src/utils') // 只会匹配 import 'utils'
        },
        modules: [
            path.resolve(__dirname, 'node_modules'),    // 指定当前目录下的 node_modules 优先查找
            'node_modules',     // 如果有一些类库是放在一些奇怪的地方的，你可以添加自定义的路径或者目录
        ]
    },

    module: {
        rules: [
            {
                test: /\.js/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                type: 'javascript/esm',     // 指定模块类型
            },
            // {
            //     test: /\.jsx?/,
            //     include: [
            //         path.resolve(__dirname, 'src')
            //     ],
            //     use: 'babel-loader',
            // },
            // {
            //     test: /\.css/,
            //     include: [
            //         path.resolve(__dirname, 'src'),
            //     ],
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //     ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    // 将css用link的方式引入就不再需要style-loader了
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    }
                ]
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    // 代码模块路径解析的配置
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ],

        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
    },

    plugins: [
        new UglifyPlugin(),
        // 使用 uglifyjs-webpack-plugin 来压缩 JS 代码
        // 如果你留意了我们一开始直接使用 webpack 构建的结果，你会发现默认已经使用了 JS 代码压缩的插件
        // 这其实也是我们命令中的 --mode production 的效果
        new HtmlWebpackPlugin({
            filename: 'index.html', // 输出到dist的文件名
            template: 'assets/index.html',
            hash: true  // 会在打包好的bundle.js后面加上hash串
        }),

        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: 'assets/login.html',
            hash: true,
            chunks: ['page1', 'login']   // 对应关系,login.js对应的是login.html
        }),

        new CopyWebpackPlugin([
            { from: 'src/res/file.txt', to: 'build/res_copy/file.txt' }
        ]),

        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/style.css')
    ]
}