"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddTextToHtml_1 = require("../shared/AddTextToHtml");
var user_1 = require("../shared/user");
console.log('running page1.ts code now');
AddTextToHtml_1.default('page1.ts says hello', 'PageOneDivOne');
var page1user = new user_1.user('Gregory', 'House', new Date('1959-06-11'), user_1.UserType.Doctor, "Diagnostics");
AddTextToHtml_1.default("Page One User is " + page1user.getDisplayName(), 'PageOneDivOne');
//# sourceMappingURL=page1.js.map