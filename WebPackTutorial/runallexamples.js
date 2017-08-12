//const exec = require('child_process').execSync
//console.log(exec('npm run example1:build').toString());
const spawn = require('child_process').spawn;
spawn('npm', ['run','example1:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example2:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example3:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example4:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example5:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example6:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example7:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example7b:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example8:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example9:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10a:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10b:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10c:run'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10d:run'], { shell: true, stdio: 'inherit' });