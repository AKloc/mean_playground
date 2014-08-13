/**
 * Created by andy on 8/10/14.
 */
var fs = require('fs');

var filePath = process.argv[2];
//console.log("Path is " + filePath);


fs.readFile(filePath,function callback (err, data)
{
    var contents = data.toString();
    var newLineCount = (contents.split('\n')).length - 1;
    console.log(newLineCount);
});