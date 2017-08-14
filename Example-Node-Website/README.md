# Example Node Website

- For a tutorial of the webpack basics, please take a look at the [WebPackTutorial](https://github.com/JamesWebDev/JamesWebDev/tree/master/WebPackTutorial) project also found in this repository.

## Examples Still to be writen
- Source Maps
- Module Loaders
  - babel
  - html, and ng-cache-loader
  - typescript
  - fonts
  - images
- ~~Using older window/global js libraries~~
  - Using js libraries not written as a module
- Copying files without modifying/bundling/transpiling them
- ~~Cleanup/removal of old build files~~
- Uglify prod build
- A fully functional angularjs, typescript, scss, webpack2 production ready example; with images, fonts, using new and old style js libraries.
- Cover differences in webpack when writing a js library vs a website.

## Reducing your final bundle size.

### Import only what you need

When I `import _ from 'lodash'` it adds 526.94 KB unminified to the bundle. Doing this would be like adding `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js"></script>` in a classically written website. Which is a huge over head if I was only planning on using 1 function from the library, like this for example.
```js
var object = { 'a': [{ 'b': { 'c': 'lodash found this value for me' } }] };
console.log(_.get(object, 'a[0].b.c'));
```

Now because we are using Imports I can do this instead.

```js
import get from 'lodash/get'
var object = { 'a': [{ 'b': { 'c': 'lodash sub-path import worked if you see this message' } }] };
console.log(get(object, 'a[0].b.c'));
```

Using this method, I have only added 30.94 KB uncompressed to my bundle, for a savings of 496 KB. After final minification we are down to **9.88 KB**, and **2.41 KB** gziped. While the lodash.min.js file is **69.7 KB** minified.

### Tree Shaking, what it can and can't do.

If you run this command you will see that we had an exported function in the Books.ts file that was dropped out of the build output. Also, a DeprecatedClassWeForgotToRemove class from Digital.ts that got left in, and the file Paper.ts which webpack never even saw. Let's look at each of these scenarios.

```bash
set NODE_ENV=production&&webpack --config=webpack.config.js

WARNING in 3-treeshaking-67ede7c.js from UglifyJs
Dropping unused function getVersion [./treeshaking/Books.ts:11,6]
```

#### Tree Shaking functions

UglifyJS understands ES5, and is able to tell that nothing anywhere calls or references the  `getVersion` function so it drops it on the floor.

#### Tree Shaking classes

Uglify-es, or Babili would have been able to see that `DeprecatedClassWeForgotToRemove` was safe to remove, if we were transpiling to **es2015**, but currently their isn't any tool that can do this to **es5** classes. The reason for this is that class methods on es5 classes modify the function prototype.

```js
function DepricatedClassWeForgotToRemove() {}
DepricatedClassWeForgotToRemove.prototype.Hello = function() {
    console.log("Hello");
};
```

Because the class prototype is modified they fail to identify the function as clean, and don't remove it. But until our site has no IE 11 support requirements we are stuck with ES5

#### Tree Shaking unimported classes

I didn't use a file glob to find all the ts files in the treeshaking folder, but instead used the `PersonWhoReads.ts` file as an entry point. When webpack built the files dependency graph, since nothing is importing `Paper.ts`, webpack never saw the file. This is both a good, and bad thing.

- Good because we are happy it was left out of the bundle.
- Bad because their is manual overhead in using this as our method of tree shaking.

Every file is responsible for importing everything it needs in order to run. But when creating a new file, we have to go and find the right file somewhere in the dependency graph that should be responsible for importing the new file. This isn't really a problem if you are building a new site, but is much more time consuming if you are retro fitting an older site.

Also, this can be more problematic in angular where the only file that depends on the new file being in memory is an html template. For these scenario's we are going to have to wait for runtime errors rather than compile time errors inorder to catch our mistakes which is never preferable.