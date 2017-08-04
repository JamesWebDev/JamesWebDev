(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("example-node-package", [], factory);
	else if(typeof exports === 'object')
		exports["example-node-package"] = factory();
	else
		root["example-node-package"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Example-Node-Package/dist/example-node-package.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define("example-node-package", [], factory);else if (typeof exports === 'object') exports["example-node-package"] = factory();else root["example-node-package"] = factory();
})(this, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // identity function for calling harmony imports with the correct context
            /******/__webpack_require__.i = function (value) {
                return value;
            };
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = "./index.ts");
            /******/
        }(
        /************************************************************************/
        /******/{

            /***/"./Helpers/add-two-numbers.ts":
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                var AddTwoNumbers = function () {
                    function AddTwoNumbers(one, two) {
                        this.numberone = one;
                        this.numbertwo = two;
                        this.addThemTogether();
                        this.logTheResult();
                    }
                    AddTwoNumbers.prototype.addThemTogether = function () {
                        this.result = this.numberone + this.numbertwo;
                    };
                    AddTwoNumbers.prototype.logTheResult = function () {
                        console.log(this.result);
                    };
                    return AddTwoNumbers;
                }();
                exports.AddTwoNumbers = AddTwoNumbers;

                /***/
            },

            /***/"./TreeShake/deadCodeExpectItToBeRemoved.ts":
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                var DeadCodeExpectItToBeRemoved = function () {
                    function DeadCodeExpectItToBeRemoved(msg) {
                        var _this = this;
                        this.logTheClassesProperties = function () {
                            console.log(_this.message);
                        };
                        this.message = msg;
                    }
                    return DeadCodeExpectItToBeRemoved;
                }();
                exports.DeadCodeExpectItToBeRemoved = DeadCodeExpectItToBeRemoved;

                /***/
            },

            /***/"./TreeShake/treeShakeThisAway.ts":
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                var TreeShakeThisAway = function () {
                    function TreeShakeThisAway(one, two) {
                        var _this = this;
                        this.addThemTogether = function () {
                            _this.result = _this.numberone + _this.numbertwo;
                        };
                        this.logTheResult = function () {
                            console.log(_this.result);
                        };
                        this.numberone = one;
                        this.numbertwo = two;
                        this.addThemTogether();
                        this.logTheResult();
                    }
                    return TreeShakeThisAway;
                }();
                exports.TreeShakeThisAway = TreeShakeThisAway;

                /***/
            },

            /***/"./TreeShake/treeShakeThisFunctionAway.ts":
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                exports.TreeShakeThisFunctionAway = function (one, two) {
                    var _this = this;
                    this.addThemTogether = function () {
                        _this.result = _this.numberone + _this.numbertwo;
                    };
                    this.logTheResult = function () {
                        console.log(_this.result);
                    };
                    this.numberone = one;
                    this.numbertwo = two;
                    this.addThemTogether();
                    this.logTheResult();
                };

                /***/
            },

            /***/"./index.ts":
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                var deadCodeExpectItToBeRemoved_1 = __webpack_require__("./TreeShake/deadCodeExpectItToBeRemoved.ts");
                exports.DeadCodeExpectItToBeRemoved = deadCodeExpectItToBeRemoved_1.DeadCodeExpectItToBeRemoved;
                var treeShakeThisAway_1 = __webpack_require__("./TreeShake/treeShakeThisAway.ts");
                exports.TreeShakeThisAway = treeShakeThisAway_1.TreeShakeThisAway;
                var add_two_numbers_1 = __webpack_require__("./Helpers/add-two-numbers.ts");
                exports.AddTwoNumbers = add_two_numbers_1.AddTwoNumbers;
                var treeShakeThisFunctionAway_1 = __webpack_require__("./TreeShake/treeShakeThisFunctionAway.ts");
                exports.TreeShakeThisFunctionAway = treeShakeThisFunctionAway_1.TreeShakeThisFunctionAway;

                /***/
            }

            /******/ })
    );
});
//# sourceMappingURL=example-node-package.js.map

/***/ }),

/***/ "../../ts/string-extensions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
///<reference path="./global.d.ts" />

var _this = this;
String.prototype.right = function (numOfChars) {
    if (numOfChars === undefined || numOfChars >= this.length) {
        return this.toString();
    }
    return this.substring(this.length - numOfChars, this.length);
};
String.prototype.left = function (numOfChars) {
    if (numOfChars === undefined || numOfChars >= this.length) {
        return this.toString();
    }
    return this.substring(0, numOfChars);
};
String.prototype.orEmpty = function () { return _this || ""; };
String.prototype.replaceAll = function (find, replace) {
    return this.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
};


/***/ }),

/***/ "./simple-node-demo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//Example of using a class from example node package
var example_node_package_1 = __webpack_require__("../../Example-Node-Package/dist/example-node-package.js");
new example_node_package_1.AddTwoNumbers(1, 2);
//Example of importing and using string-extensions from example ts node package
__webpack_require__("../../ts/string-extensions.ts");
var x = "Hello World";
console.log(x.left(5)); //left comes from string-extensions


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./simple-node-demo.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=nodeDemo.js.map