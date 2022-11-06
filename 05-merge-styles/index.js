const fs = require('fs');
const path = require('path');
const stylePath = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist/bundle.css');
const writeStream = fs.createWriteStream(bundlePath);

fs.readdir(stylePath, { withFileTypes: true }, function(err, fileNames) {
  if (err) throw err;

  fileNames.forEach(function(fileName) {
      const ext = path.parse(fileName.name).ext;
      if (fileName.isFile() === true && ext === '.css')  {
        const readStream = fs.createReadStream(path.join(stylePath, fileName.name));
        readStream.on('data', data => writeStream.write(data));
        readStream.on('error', error => console.log('Error', error.message));
      }
    });
});