///<reference path="./global.d.ts" />


String.prototype.right = function (numOfChars: number) {
    if (numOfChars === undefined || numOfChars >= this.length) {
        return this.toString();
    }
    return this.substring(this.length - numOfChars, this.length);
}
String.prototype.left = function (numOfChars) {
    if (numOfChars === undefined || numOfChars >= this.length) {
        return this.toString();
    }
    return this.substring(0, numOfChars);
}
String.prototype.orEmpty = () => this || "";

String.prototype.replaceAll = function (find: string, replace: string) {
    return this.replace(new RegExp(find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), replace);
}
