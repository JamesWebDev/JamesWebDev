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
//# sourceMappingURL=AddTextToHtml.js.map