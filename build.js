const { exec } = require('child_process');
const fs = require('fs');

console.log('Building Think Creative Agency website...');

// Create dist directories if they don't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

if (!fs.existsSync('dist/css')) {
  fs.mkdirSync('dist/css');
}

if (!fs.existsSync('dist/js')) {
  fs.mkdirSync('dist/js');
}

// Compile SASS and copy JS files using npm scripts
exec('npm run build:sass && npm run build:sass-min && npm run copy:js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  
  console.log('Build completed successfully!');
  console.log('Output files are in the dist/ directory');
  console.log('Website is ready for deployment!');
});