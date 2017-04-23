const os = require("os");
const path = require('path');
const fs = require("fs-extra");
const tab = '    ';
const patchPadding = '000'
const packageJsonFilePath = './package.json';
var packageJson = require(packageJsonFilePath);

//Helper Function
String.prototype.right = function (numOfChars) {
    if (numOfChars === undefined || numOfChars >= this.length) {
        return this.toString();
    }
    return this.substring(this.length - numOfChars, this.length);
};
function isInteger(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
//Helper Function


var packageVersion = packageJson.version;

let major = packageVersion.split('.')[0];
let minor = packageVersion.split('.')[1];
let patch = packageVersion.split('.')[2];

console.log(`[major]${major}, [minor]${minor}, [patch]${patch}`);
if(isInteger(major) && isInteger(minor) && isInteger(patch)){
    console.log('Version Passes isInteger check')
    var currentNumericPatchVersion = parseInt(patch);
    console.log(`Current Patch Version = ${currentNumericPatchVersion}, and Version+1 = ${currentNumericPatchVersion+1}`);
    var newPatchVersion = (patchPadding+(currentNumericPatchVersion+1)).right(3);
    var newPackageVersion =  [major,minor,newPatchVersion].join('.');
    console.log('New Package Version = '+newPackageVersion)
    packageJson.version = newPackageVersion
    console.log(JSON.stringify(packageJson,null,tab));
    fs.writeFileSync(packageJsonFilePath, JSON.stringify(packageJson,null,tab), 'utf8');
}

