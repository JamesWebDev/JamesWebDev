//import './page2.html';
import AddTextToHtml from '../shared/AddTextToHtml';
import {user,UserType} from '../shared/user';
import './page2.scss'

console.log('running page2.ts code now');
AddTextToHtml('page2.ts says goodbye','PageTwoDivOne');
 
var page2user = new user('Florence','Nightingale',new Date('1982-07-07'),UserType.Nurse, "Sanitization")

AddTextToHtml(`PageTwo User is ${page2user.getDisplayName()}`,'PageTwoDivOne');