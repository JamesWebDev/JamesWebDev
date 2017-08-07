const path = require('path');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin  = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const webpack = require( 'webpack' );
const glob = require("glob");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const projectFiles = glob.sync("./example9/**/*.ts");
projectFiles.push('./example9/app.scss');

module.exports = {
    entry: {
        app: projectFiles
    },    
    output: {
        path: path.resolve(__dirname, 'example9/dist'),
        filename: '[name].js'
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
            },
            {
                test: /\.(html)$/,
                exclude: /index\.html/,
                use: {
                    loader: 'html-loader',                    
                    options: {
                        attrs: [':src']
                    }
                }
            },
            {
                test: /\.(css|scss)$/,                
                use: ExtractTextPlugin.extract({
                    use: [
                        {loader: 'css-loader'},
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, './node_modules'), 
                                    path.resolve(__dirname, './example9')
                                ]
                            }
                        }
                    ]
                })
            },            
        ]
    },    
    plugins:[        
        //This extracts the css into it's own css file rather than bundling it in the app.js file
        new ExtractTextPlugin({
            //this is config used by module.rules for css|scss
            filename: 'style.css'
        }),
        //https://github.com/s-panferov/awesome-typescript-loader
        //If you want to use new paths and baseUrl feature of TS 2.0 please include TsConfigPathsPlugin
        new TsConfigPathsPlugin({configFileName: "./tsconfig.example9.json",compiler: "typescript"}),
        //This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
        //this is especially useful for webpack bundles that include a file hash in the filename 
        //which changes every compilation. You can either let the plugin generate an HTML file 
        //for you, supply your own template using lodash templates or use your own loader.
        //https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'example9/index.html' ),
            filename: 'index.html',            
            chunksSortMode: 'dependency',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'example9/page1/page1.html' ),
            filename: 'page1.html',
            chunksSortMode: 'dependency',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'example9/page2/page2.html' ),
            filename: 'page2.html',
            chunksSortMode: 'dependency',
            inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared',
            filename: 'shared.js',
            chunks: ['app'],
            
            minChunks: (module) => {                
                console.log(`shared resource= ${module.resource} result=${module.context && module.context.indexOf("shared") !== -1}`);
                return module.context && module.context.indexOf("shared") !== -1;
            }
        }),        
        // prints more readable module names in the browser console on Hot Module Reload updates
        // Also, it helps to make output of file.[chunkhash].js fully static, since module id's will be named instead of dynamically assigned integers.
        // and static output file names help keep client from downloading code they already have cached.
        // also easier to debug since you can see at a glance what modules are being required.
        new NamedModulesPlugin(),
        //This webpack plugin cleans up the extraneous files from the webpack's output path.
        //Use the exclude option if you want to keep files that are not webpack assets.
        //Basically it compares folder contents to emitted files, and removes old assets.
        //This is especially useful since we are including file hashes in file names.
        new WebpackCleanupPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "example9"),
        openPage: './example9/index.html',
        port: 3009
    }
}