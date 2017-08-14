import { Digital } from './Books';
class PersonWhoReads {
    constructor(bookType) {
        this.bookType = bookType;
    }
    toString() {
        return 'I like to read ' + this.bookType.toString() + ' Books';
    }
}
console.log(new PersonWhoReads(new Digital()).toString());
//# sourceMappingURL=PersonWhoReads.js.map