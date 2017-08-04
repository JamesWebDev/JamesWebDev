
const os = require("os");
const path = require('path');
const glob = require('glob'); //https://github.com/isaacs/node-glob
const fs = require('fs-extra'); //https://github.com/jprichardson/node-fs-extra
const readlineSync = require('readline-sync'); //https://github.com/anseki/readline-sync
const changeCase = require('change-case');//https://www.npmjs.com/package/change-case

//var whatToCreate = readlineSync.question('What would you like to build? (component) ');// Wait for user's response.
//if(whatToCreate.match(/com/i)){
if(true){        
    let folder = glob.sync('./src/**/components')[0];
    const COMPONENTSDIR = path.resolve( __dirname, folder );
    //var componentNameInput = readlineSync.question('What would you like to call your component');// Wait for user's response.
    let componentNameInput = "HelloWorld";
    let NEWCOMPONENTDIRECTORY = path.resolve(COMPONENTSDIR, changeCase.camelCase(componentNameInput).toLowerCase());
    let angularComponentName = changeCase.camelCase(componentNameInput);    
    let componentFileName = changeCase.paramCase(componentNameInput)+'.component.ts';    
    let componentHtmlFile = changeCase.paramCase(componentNameInput)+'.component.html';    
    let tsClassName = changeCase.pascalCase(componentNameInput)+'Component'; 
    console.log(`components root           = ${COMPONENTSDIR}`);
    console.log(`new components directory  = ${NEWCOMPONENTDIRECTORY}`);
    console.log(`component name in angular = ${angularComponentName}`);
    console.log(`component file name       = ${componentFileName}`); 
    console.log(`component file name       = ${componentHtmlFile}`);  
    console.log(`typescript class name     = ${tsClassName}`);

/*    console.log(changeCase.pascalCase('test-string'));
    console.log(changeCase.paramCase('TestString'));*/
}

//console.log(`${}`);




/*
var string = "Stackoverflow is the BEST";
var result = string.match(/best/i);
// result == 'BEST';

if (result){
    alert('Matched');
}
*/