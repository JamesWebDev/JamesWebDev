//const exec = require('child_process').execSync
//console.log(exec('npm run example1:build').toString());
const spawn = require('child_process').spawn;
spawn('npm', ['run','example1:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example2:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example3:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example4:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example5:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example6:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example7:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example7b:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example8:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example9:build'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10a'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10b'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10c'], { shell: true, stdio: 'inherit' });
spawn('npm', ['run','example10d'], { shell: true, stdio: 'inherit' });