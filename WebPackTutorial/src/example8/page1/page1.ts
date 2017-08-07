import AddTextToHtml from '../shared/AddTextToHtml';
import {user,UserType} from '../shared/user';
import './page1.scss'
console.log('running page1.ts code now');

AddTextToHtml('page1.ts says hello','PageOneDivOne');

var page1user = new user('Gregory','House',new Date('1959-06-11'),UserType.Doctor,"Diagnostics")

AddTextToHtml(`Page One User is ${page1user.getDisplayName()}`,'PageOneDivOne');