const fs = require("fs/promises");
const path = require("path");
const dir = path.join(__dirname, "files");
const dirCopy = path.join(__dirname, "files-copy");

fs.rm(dirCopy, {
  recursive: true,
  force: true,
}).finally(function() {
  fs.mkdir(dirCopy, {recursive: true});
  fs.readdir(dir)
    .then(files => {
      files.forEach(file => {
        let pathFile = path.join(dir, file);
        let pathFileCopy = path.join(dirCopy, file);
        fs.copyFile(pathFile, pathFileCopy);
        console.log(file);
      });
    });
}); 
