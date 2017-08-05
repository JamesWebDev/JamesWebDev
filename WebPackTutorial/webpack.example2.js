const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './example2/app.js',    
    output: {
        path: path.resolve(__dirname, 'example2/dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'example2/index.html' ),
            filename: 'index.html',
            chunksSortMode: 'dependency',
            inject: true
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "example2"),
        openPage: './example2/index.html',
        port: 3002
    }
}