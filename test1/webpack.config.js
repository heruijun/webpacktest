const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: [
            './src/page1.js',
            './src/page2.js',
            './src/page3.js'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
            {
                test: /\.css/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    'style-loader',
                    'css-loader',
                ]
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
            filename: 'hello.html',
            template: 'assets/index.html'
        }),

        new CopyWebpackPlugin([
            { from: 'src/res/file.txt', to: 'build/res_copy/file.txt' }
        ])
    ]
}