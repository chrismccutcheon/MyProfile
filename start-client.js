const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);

//   /*"start": "concurrently \"npm run server\" \"npm run client\"",*/
