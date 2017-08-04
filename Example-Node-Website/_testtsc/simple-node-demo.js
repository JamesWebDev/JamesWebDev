"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Example of using a class from example node package
var example_node_package_1 = require("@jameswebdev/example-node-package");
new example_node_package_1.AddTwoNumbers(1, 2);
//Example of importing and using string-extensions from example ts node package
require("@jameswebdev/ts/string-extensions");
var x = "Hello World";
console.log(x.left(5)); //left comes from string-extensions
//# sourceMappingURL=simple-node-demo.js.map