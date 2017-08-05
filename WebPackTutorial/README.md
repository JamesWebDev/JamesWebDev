# Webpack Tutorial

## Topics

* [System Setup](#system-setup)
* [Bundle Javascript](#example1-bundle-javascript)
* [Add index.html to bundle](#example2-bundle-javascript-and-html)
* [Add typescript transpile to build](#example3-transpile-typescript)
* [Example of code reuse](#example4-example-of-code-reuse)

## Topics still to be written

* Example of code reuse
* Using Multiple entry points
* Using file glob for entry point
* Style Sheets
  * plane css
  * Transpile scss
    * converting output back to css instead of js
* Source Maps
* Module Loaders
  * babel
  * html, and ng-cache-loader
  * typescript
  * fonts
  * images
* Hashing file names
  * Pulling Vendor files into seporate bundle
  * Preserving Vendor hash when local source files change (manifest)
* Using older window/global js libraries
  * Using js libraries not written as a module
* Copying files without modifying/bundling/transpiling them
* Cleanup/removal of old build files
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