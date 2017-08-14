import {Book, Other} from './Books';
import {Digital} from './Digital';

class PersonWhoReads {
  constructor(private bookType: Book) {
    new Other();
  }

  toString() {
    return 'I like to read '+this.bookType.toString() + ' Books';
  }
}

console.log(new PersonWhoReads(new Digital()).toString());