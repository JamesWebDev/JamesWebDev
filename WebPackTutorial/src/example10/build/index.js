"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./shared/user");
var AddTextToHtml_1 = require("./shared/AddTextToHtml");
console.log('running index.ts code now');
AddTextToHtml_1.default('Index page says Welcome', 'IndexDivOne');
var IndexUser = new user_1.user('Hello', "World", new Date(), user_1.UserType.Patient, "Programmer");
AddTextToHtml_1.default("Index Page User is " + IndexUser.getDisplayName(), 'IndexDivOne');
//# sourceMappingURL=index.js.map