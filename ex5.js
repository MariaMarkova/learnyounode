/* Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument. */

/*var fs = require('fs');
var path = require('path');
var dirPath = path.join(__dirname).toString();

function printListOfFiles(dirPath, extension) {
  fs.readdir(dirPath, function(err, list){
    if (err) {
      throw err;
    }
    //console.log(list);
    for(var i = 0; i < list.length; i++){
      if (path.extname(list[i]) == '.' + extension){
        console.log(list[i])
      }
      //console.log(path.extname(list[i]))
    }
  });
}

printListOfFiles(dirPath, 'txt');*/

var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirPath, function(err, list){
  if (err) {
    throw err;
  }

  for (var i in list) {
    if (path.extname(list[i]) == extension){
      console.log(list[i])
    }
  }
});

/* Learnyounode - official solution */

/* var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
}) */
