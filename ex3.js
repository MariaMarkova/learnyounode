/* Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running: cat fileName | wc -l. */

var fs = require('fs');
//var path = require('path');
//var filePath = path.join(__dirname, 'file.txt');

//read a file - returns buffer object
/*fs.readFileSync(filePath, {encoding: 'utf-8'}, function (err, data){
  if (err) {
    throw err;
  }
  console.log(data);
});*/

var text = fs.readFileSync(process.argv[2]);
var arrText = text.toString().split("\n");
console.log(arrText.length - 1);

/* Learnyounode - official solution */
/*var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)*/

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
