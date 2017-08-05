# Setup instructions

How to create this from Scratch, you need node >= 8 so that the package-lock.json file will be used.
If you don't want to change you currently installed version, consider using nvm so you can have multiple versions.

```node
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

## Example1 Bundle Javascript

```Node
npm run example1
```

This npm script will run the following two commands  
webpack --config=webpack.example1.js  
webpack-dev-server --config=webpack.example1.js --open  

* Note: While the webpack-dev-server does host your files, with this simple setup you will have to restart the dev server inorder to see your file changes. The reason is that it recompiles in memory and dosen't write the file changes to disk, and your html page isn't pointing at it's in memory compile, but instead it points to the bundle.js file on the disk. The workaround would be to run "webpack --watch" in one console, and webpack-dev-server in a second console, at which point it would have been better to use a basic node express server with webpack in watch mode.

## Example2 bundle Javascript and Html

Remove the script tag from your html  
and add the html-webpack-plugin to your project

```Node
npm install html-webpack-plugin --save-dev
npm run example2
```

* Note: Notice it is automatically adding a script tag for bundle.js to the index.html in your dist folder.

* Note:  Now when you edit either a js file or the index.html file, webpack-dev-server recompiles the modified modules, and refreshes the browser, no stopping compiling and restarting. This feature is functionally similar to the popular Browser-Sync package.

* Note: Notice that the webpack-dev-server is not pointed at the index.html file in your dist folder

## Example3 transpile typescript

In this example we are going to switch our js files to ts files.

```Node
npm install typescript --save-dev
npm install typescript -g
npm install awesome-typescript-loader --save-dev
tsc init
```

* Note: Using windows 10, and nvm, you have to run "nvm on" at least once in your console or you'll get a "Please try running this command again as root/Administrator." error when installing typescript even if the console is already running as administrator ¯\\_(ツ)_/¯
