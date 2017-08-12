const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/example2/app.js',    
    output: {
        path: path.resolve(process.cwd(), 'src/example2/dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve( process.cwd(), 'src/example2/index.html' ),
            filename: 'index.html',
            chunksSortMode: 'dependency',
            inject: true
        }),
    ],
    devServer: {
        contentBase: path.join(process.cwd(), "src/example2"),
        openPage: './src/example2/index.html',
        port: 3002
    },
    stats: {modules: false}
}