define("shared/user", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserType;
    (function (UserType) {
        UserType[UserType["Nurse"] = 0] = "Nurse";
        UserType[UserType["Doctor"] = 1] = "Doctor";
        UserType[UserType["Patient"] = 2] = "Patient";
    })(UserType = exports.UserType || (exports.UserType = {}));
    var user = (function () {
        function user(firstname, lastname, birthday, usertype, speciality) {
            var _this = this;
            this.getDisplayName = function () {
                if (_this.UserType == UserType.Doctor) {
                    return _this.LastName + ", " + _this.FirstName + ", MD";
                }
                if (_this.UserType == UserType.Nurse) {
                    return _this.LastName + ", " + _this.FirstName + ", RN";
                }
                if (_this.UserType == UserType.Patient) {
                    return _this.LastName + ", " + _this.FirstName;
                }
                return _this.LastName + ", " + _this.FirstName;
            };
            console.log('user constructor has been called');
            this.FirstName = firstname;
            this.LastName = lastname;
            this.Birthday = birthday;
            this.UserType = usertype;
            this.Speciality = speciality;
        }
        return user;
    }());
    exports.user = user;
});
define("shared/AddTextToHtml", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function AddTextToHtml(message, elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            console.log(elementId + " element found");
            var para = document.createElement("p");
            var node = document.createTextNode(message);
            para.appendChild(node);
            element.appendChild(para);
            console.log(message, elementId);
        }
        else {
            console.log(elementId + " element not found");
        }
    }
    exports.default = AddTextToHtml;
});
define("app", ["require", "exports", "shared/user", "shared/AddTextToHtml"], function (require, exports, user_1, AddTextToHtml_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('running app.ts code now');
    AddTextToHtml_1.default('Index page says Welcome', 'IndexDivOne');
    var IndexUser = new user_1.user('Hello', "World", new Date(), user_1.UserType.Patient, "Programmer");
    AddTextToHtml_1.default("Index Page User is " + IndexUser.getDisplayName(), 'IndexDivOne');
});
define("page1/page1", ["require", "exports", "shared/AddTextToHtml", "shared/user"], function (require, exports, AddTextToHtml_2, user_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('running page1.ts code now');
    AddTextToHtml_2.default('page1.ts says hello', 'PageOneDivOne');
    var page1user = new user_2.user('Gregory', 'House', new Date('1959-06-11'), user_2.UserType.Doctor, "Diagnostics");
    AddTextToHtml_2.default("Page One User is " + page1user.getDisplayName(), 'PageOneDivOne');
});
define("page2/page2", ["require", "exports", "shared/AddTextToHtml", "shared/user"], function (require, exports, AddTextToHtml_3, user_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('running page2.ts code now');
    AddTextToHtml_3.default('page2.ts says goodbye', 'PageTwoDivOne');
    var page2user = new user_3.user('Florence', 'Nightingale', new Date('1982-07-07'), user_3.UserType.Nurse, "Sanitization");
    AddTextToHtml_3.default("PageTwo User is " + page2user.getDisplayName(), 'PageTwoDivOne');
});
//# sourceMappingURL=tscBundle.js.map