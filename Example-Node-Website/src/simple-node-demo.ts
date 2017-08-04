//Example of using a class from example node package
import {AddTwoNumbers} from '@jameswebdev/example-node-package';
new AddTwoNumbers(1,2);
//Example of importing and using string-extensions from example ts node package
import '@jameswebdev/ts/string-extensions';
let x = "Hello World";
console.log(x.left(5)) //left comes from string-extensions