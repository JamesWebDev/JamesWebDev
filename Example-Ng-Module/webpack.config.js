//const DtsBundlePlugin = require("./webpack.helpers").DtsBundlePlugin;
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackVisualizer = require('webpack-visualizer-plugin');
const NodeExternals = require('webpack-node-externals');

const env = process.env.NODE_ENV || 'development';
const isProd = (['production','stage'].includes(env));
const isHot = (env === 'hot');
const MakeUglifyJsReadable = true;
console.log(`isProd = ${isProd}`);
console.log(`isHot = ${isHot}`);

const path = require('path');
const glob = require("glob");
const webpack = require( 'webpack' );

const NODEDIR = path.resolve( __dirname, './node_modules' );
const SRCDIR = path.resolve( __dirname, './src' );
const DIST = path.resolve( __dirname, './dist' );

const globoptions = {
    cwd:"./src",
    ignore:"./simple-node-demo.ts"
}
//let buildFiles = glob.sync("./**/*.ts", globoptions);
let testComponent = glob.sync("./test.component.ts", globoptions);
//let styleFile = glob.sync("./core.module.scss", globoptions);







module.exports = {
    externals: [NodeExternals()],
    bail: true, //Report the first error as a hard error instead of tolerating it.
    devtool: 'source-map',
    context: __dirname + "/src", //The base directory (absolute path!) for resolving the entry option. If output.pathinfo is set, the included pathinfo is shortened to this directory.
    entry:
    {
        "test-module": testComponent
    }, 
    output:{
        path: path.resolve(__dirname, 'dist'), //defines where output drops the bundled files
        filename: '[name].js', //[name] == entrypoint name
        libraryTarget:'umd',
        library: "example-ng-module", 
        umdNamedDefine: true //Uses file names instead of numbers, making webpacked file more readable
    },
    //externals: [NodeExternals()], 
/*    externals: [{
        angular:"var angular",
        lodash:"var lodash"
    }], */
    resolve: { 
        extensions: ['.ts','.js','.css', '.scss'],
        alias: {        
            "exampleAppModule":path.resolve(SRCDIR,'./app/app.module.ts')
        },
        modules: [ 'node_modules' ]
    },
    module: {
        rules:[  
            {
                test: /\.jsx?$/, //matches .js and .jsx files
                loader: "babel-loader",                
                exclude: /(node_modules)/                
            },
            {
                test: /\.html$/,
                exclude: /index\.html/,
                loader: "ng-cache-loader?prefix=//"
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options:{
                    configFileName:"tsconfig.json"
                }
            },               
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        
                        { loader: 'css-loader' },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [NODEDIR, SRCDIR]
                            }
                        }
                    ]
                })
            },
            {
                // Capture eot, ttf, woff, and woff2
                test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /assets\/images/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loaders: [
                    //url-loader lets us base64 encode the images and include them in the js
                    //otherwise we have to copy the images folders into any project that uses this library which should be avoided
                    'url-loader', 
                    {
                        loader: 'image-webpack-loader', //Optimize the image before base64 encoding it.
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 5,//The optimization level 0 enables a set of optimization operations that require minimal effort. There will be no changes to image attributes like bit depth or color type, and no recompression of existing IDAT datastreams. The optimization level 1 enables a single IDAT compression trial. The trial chosen is what. OptiPNG thinks it’s probably the most effective. The optimization levels 2 and higher enable multiple IDAT compression trials; the higher the level, the more trials.
                            },
                            pngquant: {
                                quality: '75-90', //https://pngquant.org/
                                speed: 3, //default is 3 
                            }
                        }
                    }
                ]
            } 
        ]    
    },         
    plugins: [
        
/*         new HtmlWebpackPlugin({
            template: path.resolve( SRCDIR, 'index.html' ),
            filename: 'index.html',
            chunksSortMode: 'dependency',
            inject: true
        }),  */
        //https://github.com/s-panferov/awesome-typescript-loader
        //If you want to use new paths and baseUrl feature of TS 2.0 please include TsConfigPathsPlugin
        new TsConfigPathsPlugin({
            context: __dirname,
            configFileName:"./tsconfig.json",
            compiler: "typescript",
        }),               
        //angular wants window.jQuery to exist or it will use jquerylite, bundled jquery dne on the window, this exposes it to angular.
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery':"jquery",
            angular:"angular"
        }),        
        //This plugin should come before DtsBundlePlugin if you want to make a bundled d.ts file.
        //tsc dosen't emit d.ts files if they only contain interfaces, this copies them into dist
        new CopyWebpackPlugin([
                //{ from: '../dist/**/*.d.ts', to: DIST },//Makes sure WebpackCleanupPlugin dosen't delete these
                { from: './**/*.d.ts', to: DIST },//Copies our d.ts files to dist since tsc dosen't emit them
                { from: './assets/scss/**/*.scss', to: DIST }
            ], 
            {copyUnmodified: false,debug:'warning'}
        ),
        new ExtractTextPlugin({
            //this is config used by module.rules for css|scss
            filename: '[name].css'
        }),
        //this can be used to force bundle to be 1 file, not sure if this is important though...
        new webpack.optimize.LimitChunkCountPlugin({maxChunks:1}),
        
        new NamedModulesPlugin({root:"./src"}),
        //is optional. Use it if you want async error reporting.
        // We need this plugin to detect a `--watch` mode. It may be removed later
        // after https://github.com/webpack/webpack/issues/3460 will be resolved.
        new CheckerPlugin(),
        //This webpack plugin cleans up the extraneous files from the webpack's output path.
        //Use the exclude option if you want to keep files that are not webpack assets.
        //Basically it compares folder contents to emitted files, and removes old assets.        
        new WebpackCleanupPlugin({preview: false}),
        new WebpackVisualizer({filename: '../WebpackVisualizer.html'})
    ],
    //Include polyfills or mocks for various node stuff
    node:
    {
        global: true,
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    },

    devServer: { 
        compress: true, 
        contentBase: 'public',
        port: 2727,
        historyApiFallback: true
    },
    stats: { errorDetails: true }
}

// if process.env.NODE_ENV === 'production' add Uglify to the array of plugins
if (isProd) {
    //much slower build avoid when developing locally
    module.exports.plugins.push(        
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: true,
                dead_code: true
            },
            minimize: MakeUglifyJsReadable?false:true,
            sourceMap: MakeUglifyJsReadable?true:false,
            mangle: false,
            beautify: MakeUglifyJsReadable?true:false,
            preserveComments: MakeUglifyJsReadable?true:false
        })
    );
}