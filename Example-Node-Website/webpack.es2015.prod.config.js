//const DtsBundlePlugin = require("./webpack.helpers").DtsBundlePlugin;
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackVisualizer = require('webpack-visualizer-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");
//const BabelPlugin = require("babel-webpack-plugin");


const env = process.env.NODE_ENV || 'development';
const babelEnv = process.env.BABEL_ENV || 'development';
const isProd = (['production','stage'].includes(env));
const isHot = (env === 'hot');
const MakeUglifyJsReadable = true;
console.log(`isProd = ${isProd}`);
console.log(`isHot = ${isHot}`);
console.log(`babelEnv = ${babelEnv}`)


const path = require('path');
const glob = require("glob");
const webpack = require( 'webpack' );

const NODEDIR = path.resolve( __dirname, './node_modules' );
const SRCDIR = path.resolve( __dirname, './src' );
const DIST = path.resolve( __dirname, './dist' );

const globoptions = {
    cwd:"./src",
    ignore:[
        "./simple-node-demo.ts",
        "./treeshaking/**/*"
    ]
}
let buildFiles = glob.sync("./**/*.ts", globoptions);
buildFiles.push('./app/app.style.scss')
//let indexFile = glob.sync("./index.ts", globoptions);
//let styleFile = glob.sync("./app/app.style.scss", globoptions);
//buildFiles.push(styleFile);
let nodeDemoFile = glob.sync("./simple-node-demo.ts", {cwd:"./src"})



console.log(buildFiles)


module.exports = {
    bail: true, //Report the first error as a hard error instead of tolerating it.
    //devtool: 'source-map',
    context: __dirname + "/src", //The base directory (absolute path!) for resolving the entry option. If output.pathinfo is set, the included pathinfo is shortened to this directory.
    entry:
    {
        "client": buildFiles,
        "nodeDemo":nodeDemoFile,
        "treeshaking":"./treeshaking/PersonWhoReads.ts"
    }, 
    output:{
        path: path.resolve(__dirname, 'dist'), //defines where output drops the bundled files
        filename: `[id]-[name]-[chunkhash:7].js`
    },     
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
                loader: "ng-cache-loader?prefix=[dir]/[dir]"
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options:{
                    configFileName:"es2015/tsconfig.json"
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
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            template: path.resolve( SRCDIR, 'index.html' ),
            filename: 'index.html',
            chunksSortMode: 'dependency',
            inject: true
        }), 
        new webpack.optimize.CommonsChunkPlugin({
            name: `vendor`,
            filename: `[id]-[name]-[chunkhash:7].js`,
            chunks: [`client`],
            
            minChunks: (module) => {                
                //console.log(`shared resource= ${module.resource} result=${module.context && module.context.indexOf(`shared`) !== -1}`);
                return module.context && module.context.indexOf(`node_modules`) !== -1;
            }
        }),
        //https://github.com/s-panferov/awesome-typescript-loader
        //If you want to use new paths and baseUrl feature of TS 2.0 please include TsConfigPathsPlugin
        new TsConfigPathsPlugin({
            context: __dirname,
            configFileName:"./es2015/tsconfig.json",
            compiler: "typescript",
        }),               
        //angular wants window.jQuery to exist or it will use jquerylite, bundled jquery dne on the window, this exposes it to angular.
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery':"jquery"
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
        //This extracts the css into it`s own css file rather than bundling it in the app.js file
        new ExtractTextPlugin({
            //this is config used by module.rules for css|scss
            filename: `[id]-[name]-[contenthash:7].css`
        }),
        //this can be used to force bundle to be 1 file, not sure if this is important though...
        //new webpack.optimize.LimitChunkCountPlugin({maxChunks:1}),
        
        new NamedModulesPlugin(),
        new InlineChunkManifestHtmlWebpackPlugin({dropAsset: true}),
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
        historyApiFallback: true,
        stats: { errorDetails: true,modules:false }
    },
    stats: { errorDetails: true,modules:false }
}

// if process.env.NODE_ENV === 'production' add Uglify to the array of plugins
if (isProd) {
    //much slower build avoid when developing locally
    module.exports.plugins.push(        
        new BabiliPlugin({mangle:false})
        /* new BabelPlugin({
            test: /\.js$/,
            presets: ['env'],
            sourceMaps: false,
            compact: false
          }), */
    );
}

/* {
    minify: false,
    booleans: MakeUglifyJsReadable?false:true,
    builtIns: MakeUglifyJsReadable?false:true,
    deadcode: MakeUglifyJsReadable?false:true,
    evaluate: MakeUglifyJsReadable?false:true,
    flipComparisons: MakeUglifyJsReadable?false:true,
    guards: MakeUglifyJsReadable?false:true,
    infinity: MakeUglifyJsReadable?false:true,
    mangle: MakeUglifyJsReadable?false:true,
    numericLiterals: MakeUglifyJsReadable?false:true,
    replace: MakeUglifyJsReadable?false:true,
    simplify: MakeUglifyJsReadable?false:true,
    typeConstructors: MakeUglifyJsReadable?false:true
    {
            mangle:false,
            deadcode: true
        }
} */