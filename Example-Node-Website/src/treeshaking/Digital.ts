import {Book} from './Books'
export class Digital implements Book {
    toString() {
        return 'New';
    }
}
  
export class DeprecatedClassWeForgotToRemove {
    Hello(){
        console.log("Hello")
    }
}