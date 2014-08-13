/**
 * Created by andy on 8/10/14.
 */

// This includes the entire "filesystem" library.
var fs = require('fs');

var filePath = process.argv[2];
//console.log("Path is " + filePath);

var buffer = fs.readFileSync(filePath);

var contents = buffer.toString();

var newLineCount = (contents.split('\n')).length - 1;

console.log(newLineCount);



/* Official Solution:
 var fs = require('fs')

 var contents = fs.readFileSync(process.argv[2])
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)

 */