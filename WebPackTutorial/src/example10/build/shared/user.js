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
//# sourceMappingURL=user.js.map