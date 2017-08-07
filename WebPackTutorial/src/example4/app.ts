import {user,UserType} from './shared/user';
import AddTextToHtml from './shared/AddTextToHtml';

console.log('running app.ts code now');
AddTextToHtml('Index page says Welcome','IndexDivOne');

var IndexUser = new user('Hello',"World",new Date(),UserType.Patient,"Programmer")

AddTextToHtml(`Index Page User is ${IndexUser.getDisplayName()}`,'IndexDivOne');