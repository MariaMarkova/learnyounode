/*  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.
  The full path to the file to read will be provided as the first
  command-line argument. */

/*var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'file.txt');

function readF(callback){
  fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data){
    if (err) {
      throw err;
    }
    //console.log(data);
    callback(data);
  });
}

function countNumOfRows(string) {
    var rows = string.split("\n").length - 1;
    console.log(rows)
}

readF(countNumOfRows); */

var fs = require('fs');

function readF(callback){
  fs.readFile(process.argv[2], {encoding: 'utf-8'}, function (err, data){
    if (err) {
      throw err;
    }
    //console.log(data);
    callback(data);
  });
}

function countNumOfRows(string) {
    var rows = string.split("\n").length - 1;
    console.log(rows)
}

readF(countNumOfRows);

/* Learnyounode - official solution */

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
