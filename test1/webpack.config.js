const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: [
            './src/page1.js',
            './src/page2.js',
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            utils$: path.resolve(__dirname, 'src/utils') // 只会匹配 import 'utils'
        }
    },

    module: {
        rules: [
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
            }
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
    ]
}