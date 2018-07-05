var cmd = require('node-cmd');

console.log('Starting Api...');
cmd.run('set PORT=3001 && node ./src/3-Api/Config/StartConfig.js');

console.log('Starting Web...');
cmd.run('set PORT=3000 && react-scripts start');

console.log('Finished...');
