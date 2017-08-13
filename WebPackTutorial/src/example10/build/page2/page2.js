"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import './page2.html';
var AddTextToHtml_1 = require("../shared/AddTextToHtml");
var user_1 = require("../shared/user");
console.log('running page2.ts code now');
AddTextToHtml_1.default('page2.ts says goodbye', 'PageTwoDivOne');
var page2user = new user_1.user('Florence', 'Nightingale', new Date('1982-07-07'), user_1.UserType.Nurse, "Sanitization");
AddTextToHtml_1.default("PageTwo User is " + page2user.getDisplayName(), 'PageTwoDivOne');
//# sourceMappingURL=page2.js.map