///<reference path="./global.d.ts" />
"use strict";
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
//# sourceMappingURL=string-extensions.js.map