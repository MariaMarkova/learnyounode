/* Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the
  list of files (one file per line) to the console. You must use
  asynchronous I/O.  */

var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extension, callback) {
  var extension = '.' + extension;
  fs.readdir(dirPath, {encoding: 'utf-8'}, function(err, list){
    if (err) {
      return callback(err);
    }
    var arr = [];
    for (var i in list) {
      if (path.extname(list[i]) == extension){
        arr.push(list[i]);
      }
    }
    return callback(null, arr);
  });
}

/* Learnyounode - official solution */

// _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution_filter.js_ :

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
