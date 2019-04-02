var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.join(__dirname, "build")
    },

    devServer: {
        contentBase: './build',
        port: 9000,
        stats: "errors-only", // 只打印错误
        overlay: true, //编译出错误的时候在浏览器中全屏显示报错日志
    },

    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env', '@babel/preset-react']
                //   }
                // 增加了.babelrc文件后，options项即可省略（放到babelrc中，防止这里配置太多），在执行babel-loader的时候默认会去读.babelrc中的配置。
                }
            }
        ]
    }
}
