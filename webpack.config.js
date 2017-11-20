var path = require('path');
module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        // publicPath: 'dist/',
        filename: 'bundle.js'
    },
    //配置自动刷新,如果打开会使浏览器刷新而不是热替换
    devServer: {
        contentBase: "./", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新,
        port : 8888
    },
    module: {
        loaders: [
            //转化ES6语法
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // },
            //解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['.app', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            // filter: path.join(__dirname, './src/filters'),
            'vue': 'vue/dist/vue.js',
            components: path.join(__dirname, './src/components')
        }
    }
}