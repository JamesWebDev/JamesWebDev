# Webpack Tutorial

## Topics

* [System Setup](#system-setup)
* [Bundle Javascript](#example1-bundle-javascript)
* [Add index.html to bundle](#example2-bundle-javascript-and-html)
* [Add typescript transpile to build](#example3-transpile-typescript)
* [Example of code reusability](#example4-example-of-code-reuse)
* [Example of multiple entry points](#example5-multiple-entry-points)
  * [Entry points, what are they and how do they work](#entry-points)
* [Using a file array as a single entry point](#example6-using-a-file-array-as-an-entry-point)
* [File loading issues not solved by using a globbed file array](#file-loading-issues-not-solved-by-using-a-globbed-file-array)
* [Add css to your build process](#example7-add-css-to-your-build-process)
* [Make css output smaller via the ExtractTextPlugin](#example7b-using-extracttextplugin-to-ouput-a-css-file)
* [Adding scss transpiling to the build](#example8-adding-scss-transpiling-to-the-build)
* [Scss common misunderstanding](#scss-common-misunderstanding)
* [How to prevent duplicate code in your Scss bundle output](#example9-how-to-prevent-duplicate-code-in-your-scss-bundle-output)

## Topics still to be written

* Hashing file names
  * Pulling Vendor files into separate bundle
  * Preserving Vendor hash when local source files change (manifest)
* Source Maps
* Module Loaders
  * babel
  * html, and ng-cache-loader
  * typescript
  * fonts
  * images
* ~~Using older window/global js libraries~~
  * Using js libraries not written as a module
* Copying files without modifying/bundling/transpiling them
* ~~Cleanup/removal of old build files~~
* Uglify prod build

## System Setup

How to create this from Scratch, you need node >= 8 so that the package-lock.json file will be used.
If you don't want to change you currently installed version, consider using nvm so you can have multiple versions.

```bash
nvm install latest 64
nvm on
nvm install 6.11.1 64
npm -v
nvm use 6.11.1
npm -v
nvm use 8.2.1

npm init
npm install webpack webpack-dev-server -D
npm install webpack webpack-dev-server -g --save

npm ls --json --depth=0
```

For me npm ls's output looks like this.

```json
{
  "name": "webpacktutorial",
  "version": "1.0.0",
  "dependencies": {
    "webpack": {
      "version": "3.4.1",
      "from": "webpack",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-3.4.1.tgz"
    },
    "webpack-dev-server": {
      "version": "2.6.1",
      "from": "webpack-dev-server",
      "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-2.6.1.tgz"
    }
  }
}
```

And encase it turns out to matter these are my installed global dependencies
run this command to see what yours are > npm ls -g --json --depth=0

```json
{
  "dependencies": {
    "@angular/cli": {
      "version": "1.2.5",
      "from": "@angular/cli",
      "resolved": "https://registry.npmjs.org/@angular/cli/-/cli-1.2.5.tgz"
    },
    "bower": {
      "version": "1.8.0",
      "from": "bower",
      "resolved": "https://registry.npmjs.org/bower/-/bower-1.8.0.tgz"
    },
    "gulp": {
      "version": "3.9.1",
      "from": "gulp",
      "resolved": "https://registry.npmjs.org/gulp/-/gulp-3.9.1.tgz"
    },
    "gulp-sass": {
      "version": "3.1.0",
      "from": "gulp-sass",
      "resolved": "https://registry.npmjs.org/gulp-sass/-/gulp-sass-3.1.0.tgz"
    },
    "karma": {
      "version": "1.7.0",
      "from": "karma",
      "resolved": "https://registry.npmjs.org/karma/-/karma-1.7.0.tgz"
    },
    "karma-cli": {
      "version": "1.0.1",
      "from": "karma-cli",
      "resolved": "https://registry.npmjs.org/karma-cli/-/karma-cli-1.0.1.tgz"
    },
    "node-emoji": {
      "version": "1.8.1",
      "from": "node-emoji",
      "resolved": "https://registry.npmjs.org/node-emoji/-/node-emoji-1.8.1.tgz"
    },
    "node-sass": {
      "version": "4.5.3",
      "from": "node-sass",
      "resolved": "https://registry.npmjs.org/node-sass/-/node-sass-4.5.3.tgz"
    },
    "npm": {
      "version": "5.3.0"
    },
    "npm-check": {
      "version": "5.4.5",
      "from": "npm-check",
      "resolved": "https://registry.npmjs.org/npm-check/-/npm-check-5.4.5.tgz"
    },
    "npm-list-linked": {
      "version": "0.0.3",
      "from": "npm-list-linked",
      "resolved": "https://registry.npmjs.org/npm-list-linked/-/npm-list-linked-0.0.3.tgz"
    },
    "typescript": {
      "version": "2.4.2",
      "from": "typescript",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-2.4.2.tgz"
    },
    "webpack": {
      "version": "3.4.1",
      "from": "webpack",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-3.4.1.tgz"
    },
    "webpack-dev-server": {
      "version": "2.6.1",
      "from": "webpack-dev-server",
      "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-2.6.1.tgz"
    }
  }
}
```

[back to beginning](#webpack-tutorial)

## Example1 Bundle Javascript

```bash
npm run example1
```

This npm script will run the following two commands  
webpack --config=webpack.example1.js  
webpack-dev-server --config=webpack.example1.js --open  

* Note: While the webpack-dev-server does host your files, with this simple setup you will have to restart the dev server inorder to see your file changes. The reason is that it recompiles in memory and dosen't write the file changes to disk, and your html page isn't pointing at it's in memory compile, but instead it points to the bundle.js file on the disk. The workaround would be to run "webpack --watch" in one console, and webpack-dev-server in a second console, at which point it would have been better to use a basic node express server with webpack in watch mode.

[back to beginning](#webpack-tutorial)

## Example2 bundle Javascript and Html

Remove the script tag from your html  
and add the html-webpack-plugin to your project

```bash
npm install html-webpack-plugin --save-dev
npm run example2
```

* Note: Notice it is automatically adding a script tag for bundle.js to the index.html in your dist folder.

* Note:  Now when you edit either a js file or the index.html file, webpack-dev-server recompiles the modified modules, and refreshes the browser, no stopping compiling and restarting. This feature is functionally similar to the popular Browser-Sync package.

* Note: Notice that the webpack-dev-server is not pointed at the index.html file in your dist folder

[back to beginning](#webpack-tutorial)

## Example3 transpile typescript

In this example we are going to switch our js files to ts files.

```bash
npm install typescript --save-dev
npm install typescript -g
npm install awesome-typescript-loader --save-dev
tsc init
```

* Note: Using windows 10, and nvm, you have to run "nvm on" at least once in your console or you'll get a "Please try running this command again as root/Administrator." error when installing typescript even if the console is already running as administrator ¯\\_(ツ)_/¯

[back to beginning](#webpack-tutorial)

## Example4 Example of code reuse

```bash
npm run example4
```

On each page we wan't to show a users display name.  
And we need to use this method to decide how to render their display name.

```typescript
    public getDisplayName = () =>{
        if(this.UserType == UserType.Doctor){
            return `${this.LastName}, ${this.FirstName}, MD`
        }
        if(this.UserType == UserType.Nurse){
            return `${this.LastName}, ${this.FirstName}, RN`
        }
        if(this.UserType == UserType.Patient){
            return `${this.LastName}, ${this.FirstName}`
        }
        return `${this.LastName}, ${this.FirstName}`
    }
```

We don't want to have a copy of this code on every page. If the logic changes it increases the chance that we will fail to update the code somewhere, and adds complexity. If you look at the code in Example4 you can see that we are importing user, which is allowing us to share the same getDisplayName method on all pages.  

You will also notice that I am importing the AddTextToHtml function, using typescript, and **without webpack** or requirejs or something similar I wouldn't have been able to reuse this function but would have had to recode it on every page.

[back to beginning](#webpack-tutorial)

## Example5 multiple entry points

In this example we are going to add 2 things to our webpack config  

```js
const webpack = require( 'webpack' );
```

and

```js
new webpack.optimize.CommonsChunkPlugin({
    name: 'shared',
    filename: 'shared.js',
    minChunks: (module) => {
        return module.context && module.context.indexOf("shared") !== -1;
    }
})
```  

[commons-chunk-plugin documentation](https://webpack.js.org/plugins/commons-chunk-plugin/)

This is going to allow us to move all the code shared by our entry points into a separate shared bundle. The module.context you see in the function is the absolute path to the folder of each file. The function specified for the minChunks property tests if the file is under the shared folder. When the function return true it moves the module into the shared bundle.

* Try running "webpack --config=webpack.example5.js" and look at the output in the dist folder.

* Also take note of the entry points in our webpack config.

```js
//...
module.exports = {
    entry: {
        app:'./example5/app.ts',
        page1: './example5/page1/page1.ts',
        page2: './example5/page2/page2.ts'
    },
//...
```

[back to beginning](#webpack-tutorial)

### Entry Points

An entry point is a file or an array of files that after having gathered all dependencies should be bundled into one "chunk"

* If you look at the source code in example5 you can see that this isn't a SPA application, but rather it is a classic website in that each page is a separate html file running separate js. As a result these 3 files are fully isolated other than that they all use the files in the shared directory.
* The app.ts file dosen't import page1.ts, or page2.ts, and vice versa.
* When webpack builds the [Dependency Graph](https://webpack.js.org/concepts/dependency-graph/) it looks for anything that is a url, whether it is an import/require statment, or image/file path and uses all of them to then generate a "chunk". Because app.ts/page1.ts/page2.ts arn't in eachothers dependency tree using any one of them as a single entry point would fail to build/bundle all of your source code. Their are 2.5 ways to solve this.
  1. As in example5 you can have multiple entry points, webpack will walk each file tree separately, and you can then use CommonsChunkPlugin to pull shared resources into a common/sharable bundle. Without CommonsChunkPlugin the shared code would be duplicated in each each bundle file.
  1. You can use an array of files as your entry point. This would be my first choice in a SPA application
  1. For more complex websites do both. Have multiple entry points some or all of which are arrays of files.

Look for more about arrays as entry points in [Example6](#example6-using-a-file-array-as-an-entry-point).

[back to beginning](#webpack-tutorial)

## Example6 Using a file array as an entry point

```js
//...

const glob = require("glob");

const buildfiles = glob.sync("./example6/**/*.ts")

module.exports = {
    entry: {
        app:buildfiles
    },
//...
```

In this example we use node's file glob module to find all the ts files and then use them all as our entry point. This creates a single app bundle minus the shared code which we are still extracting into a separate bundle.

The big advantage here is that we don't need to manually manage our entry points by hand anymore.
If I add a new file to the project it will get picked up automatically with no need to modify the build process.

------------------------

### File loading issues not solved by using a globbed file array

Their are still two scenarios where you can get script loading and load order issues even though you are using typescript and webpack.

* If you are accessing a global/ambient variable and you expect it to be in a certain state, but you haven't included the import of the file that would have put it in the desired state.
  * Example1: In angularjs if you try to add a service to a module by calling something like this.  
  `angular.module('app').service('MyApiCaller',MyApiCaller)`
  It expects the module to have been initialized, but it references it via a string and not an object reference; as a result typescript dosen't realize the object is undefined. You can fix this one of 2 ways.
    * (best option) You can import your app.module in your service. Every file should be importing all of it's dependencies so this would be the modern approach.
    * You can have one master index.ts file that imports all of your files in the correct order like we use to have to do with script tags in html files.
  * Example2: Angular routes you to a component but the component wasn't imported in your app.routes.ts file or your app.module.ts file. Typescript only warns you when you use an object you haven't imported, it dosen't know at what point angular is going to recognize your custom html element as being a thing, and a ng-controller attribute isn't a url so webpack's [Dependency Graph](https://webpack.js.org/concepts/dependency-graph/) magic isn't going to factor in here either.

* If you are using a framework that checks/modifies global/window variables.
  * Example: Angular checks to see if window.jQuery exists and then decides whether or not to use it's own jqlite. Webpack protects the global name space by wrapping each module in an IIFE which is great and avoids collisions, but means it won't see your imported jquery when it checks window for jQuery. Their is a simple solution, use webpack.ProvidePlugin this rewrites the usages of the global with the imported reference

```js
//ProvidePlugin Automatically loads modules. Whenever the identifier is encountered as free variable in a module, the module is loaded automatically and the identifier is filled with the exports of the loaded module.
new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    'window.jQuery':"jquery"
}),
```

------------------------
[back to beginning](#webpack-tutorial)

## Example7 Add css to your build process

First thing, we are going to add two new packages css-loader, and sytle-loader  
`npm i -D css-loader`  
`npm i -D style-loader`

next we would add this to the webpack module rules

```js
{
    test: /\.(css)$/,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
    ]
},
```

We will also need to do something so that the css files showup in the entry point [Dependency Graph](https://webpack.js.org/concepts/dependency-graph/). You have at least 3 options at this point.

1. (my choice) In each pages ts file import the required css. `import './page1.css'`

Webpack passes the output up the array of loaders. So when webpack is processing a css file, given our config, [css-loader](https://github.com/webpack-contrib/css-loader) will process the css file first, and then [style-loader](https://github.com/webpack-contrib/style-loader) processes the output of css-loader. css-loader handles the webpack [Dependency Graph](https://webpack.js.org/concepts/dependency-graph/) of your css files, and style-loader adds CSS to the DOM by injecting a style tag

```bash
npm run example7
```

You may notice that in your dist file you don't see any css files.
style-loader uses javascript to add your styles to the DOM. With sytle-loader our app.js file is **20.8KB** without it, app.js is **6KB**. With more complex sites I have seen the overhead of using sytle-loader as large as 80KB.

To avoid this lets try solving it another way. Lets use the [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

[back to beginning](#webpack-tutorial)

## Example7b using ExtractTextPlugin to ouput a css file

npm i -D extract-text-webpack-plugin

```js
{
    test: /\.(css)$/,
    use: ExtractTextPlugin.extract({
        use: [
            {loader: 'css-loader'}
        ]
    })
},
```

and then run

```bash
npm run example7b
```

As you can see this file size is much better. Our app.js file is **2.8KB**, and style.css is **148bytes**, and extract-text-webpack-plugin has added a link tag for style.css to our html. Run `npm run example7:build` to compare file sizes.

[back to beginning](#webpack-tutorial)

## Example8 adding scss transpiling to the build

For example 8 I've added `npm i -D sass-loader` and also `npm i -D node-sass` then I changed all the css files to scss files. I have also added an h2 tag to all 3 pages, and I put the style for h2's in the app.scss file.

```js
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
                        path.resolve(__dirname, './example8')
                    ]
                }
            }
        ]
    })
}
```

If run `npm run example8` you will see that like before we get a single style.css file output, but you may notice that the h2 rule is duplicated.

```css
h2 {
  background-color: black;
  color: red; }

#IndexHeader {
  background-color: #1E90FF; }
h2 {
  background-color: black;
  color: red; }

#PageOneHeader {
  background-color: #8FBC8F; }
h2 {
  background-color: black;
  color: red; }

#PageTwoHeader {
  background-color: #00FFFF; }
```

For details on why this happened read [scss common misunderstanding](#scss-common-misunderstanding), and how to solve for this in [Example9](#example9-how-to-prevent-duplicate-code-in-your-scss-bundles-output)

[back to beginning](#webpack-tutorial)

### scss common misunderstanding

Where typescript, and webpack webpack imports behave in one manner, scss imports have some subtle differences that often lead to duplication in the bundle. If I were to compare them to telephones, a javascript import/require would be like asking for my phone number, and an scss @import is like asking for my actual phone. @import does a literal copy past. If your goal is to have the smallest bundle possible and to avoid transmitting the same code twice, we are going to need to use scss [Partials](http://sass-lang.com/guide#topic-4), and an single app/main.scss file which imports all the partials.

[back to beginning](#webpack-tutorial)

## Example9 How to prevent duplicate code in your Scss bundle output

```bash
npm run example9
```

Instead of importing app.scss into each pages scss file like in example8, in this example I have inverted the imports. By removing the css import of each pages ts file e.g. `import './page1.scss'`, and removing the `@import '../app'` from each page's individual scss file, and moving all the `@import` statments into the app.scss file, I have given node-sass one central location in which it can copy and paste all the css together. The last step was to prefix each pages scss file name with an `_` this tells sass that the file is a [Partial](http://sass-lang.com/guide#topic-4). Technically because we are using webpack the `_` may not be required, but if you were to use Sass compiler by itself it would generate one css file per scss file not prefixed with an `_` and it feels safer to me to follow their compiler conventions.

Taking a look at the output you can see we now have no more duplication

```css
#IndexHeader {
  background-color: #1E90FF; }

#PageOneHeader {
  background-color: #8FBC8F; }

#PageTwoHeader {
  background-color: #00FFFF; }

h2 {
  background-color: black;
  color: red; }
```