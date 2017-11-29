
/* You can access command-line arguments via the global process object. The
  process object has an argv property which is an array containing the
  complete command-line. i.e. process.argv. */
//console.log(process.argv); - [ 'node', '/path/to/your/program.js', '1', '2', '3' ]

var sum = 0;
for(var i = 2; i < process.argv.length; i++){
  //process.argv are strings and you may need to coerce them into numbers
  sum += Number(process.argv[i]);
}
console.log(sum);


/* Learnyounode - official solution */

var result = 0

for (var i = 2; i < process.argv.length; i++) {
 result += Number(process.argv[i])
}

console.log(result)
