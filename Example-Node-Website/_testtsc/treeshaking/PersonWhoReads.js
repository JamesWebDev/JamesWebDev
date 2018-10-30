import { Other } from './Books';
import { Digital } from './Digital';
var PersonWhoReads = /** @class */ (function () {
    function PersonWhoReads(bookType) {
        this.bookType = bookType;
        new Other();
    }
    PersonWhoReads.prototype.toString = function () {
        return 'I like to read ' + this.bookType.toString() + ' Books';
    };
    return PersonWhoReads;
}());
console.log(new PersonWhoReads(new Digital()).toString());
//# sourceMappingURL=PersonWhoReads.js.map