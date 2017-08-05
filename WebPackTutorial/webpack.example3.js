const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: './example3/app.ts',    
    output: {
        path: path.resolve(__dirname, 'example3/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts','.js'],  
        modules: [ 'node_modules']                
    },
    module: {
        rules:[
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',//faster than ts-loader, type checks on seporate thread
                exclude:[
                    path.resolve(__dirname, "node_modules")
                ]
            }
        ]
    },    
    plugins:[
        new TsConfigPathsPlugin({configFileName: "./tsconfig.example3.json",compiler: "typescript"}),
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'example3/index.html' ),
            filename: 'index.html',
            chunksSortMode: 'dependency',
            inject: true
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "example3"),
        openPage: './example3/index.html',
        port: 3003
    }
}