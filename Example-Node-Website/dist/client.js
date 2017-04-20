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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

            /***/"./ExampleOfDeadCode/dc-example-func.ts":
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

            /***/"./ExampleOfDeadCode/dc-example-one.ts":
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

            /***/"./ExampleOfDeadCode/dc-example-two.ts":
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

            /***/"./Misc/add-two-numbers.ts":
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

            /***/"./index.ts":
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                function __export(m) {
                    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
                Object.defineProperty(exports, "__esModule", { value: true });
                __export(__webpack_require__("./ExampleOfDeadCode/dc-example-one.ts"));
                __export(__webpack_require__("./ExampleOfDeadCode/dc-example-two.ts"));
                __export(__webpack_require__("./Misc/add-two-numbers.ts"));
                __export(__webpack_require__("./ExampleOfDeadCode/dc-example-func.ts"));

                /***/
            }

            /******/ })
    );
});
//# sourceMappingURL=example-node-package.js.map

/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var example_node_package_1 = __webpack_require__("../../Example-Node-Package/dist/example-node-package.js");
new example_node_package_1.AddTwoNumbers(1, 2);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=client.js.map