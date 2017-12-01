var mymodule = require('./ex6.1.js')

var dirPath = process.argv[2];
var extension = process.argv[3];

mymodule(dirPath, extension, function (err, list){
  if (err) {
    return console.error('There was an error:', err)
  }
  
  for (var i = 0; i < list.length; i++) {
    console.log(list[i])
  }
});

/* Learnyounode - official solution */

// _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution.js_ :

var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
 if (err) {
   return console.error('There was an error:', err)
 }

 list.forEach(function (file) {
   console.log(file)
 })
})
