/**
 * Created by andy on 8/13/14.
 */

var fs = require('fs');
var ps = require('path');

var filePath = process.argv[2];
//console.log("Path is " + filePath);

var filter = "." + process.argv[3];
//console.log("Filter = " + filter);


fs.readdir(filePath,function callback (err, list)
{
    for(var i = 0; i < list.length; i++)
    {
        //console.log("Ext name: " + ps.extname(list[i]));
        if(ps.extname(list[i]) == filter)
        {
            console.log(list[i]);
        }
        else
        {
           // console.log(list[i]);
        }
    }
});