/**
 * Created by andy on 8/14/14.
 */

var MyModule = require('./MakeItModularModule.js');

var filePath = process.argv[2];
//console.log("Path is " + filePath);

var filter = process.argv[3];
//console.log("Filter = " + filter);

MyModule(filePath, filter, function callback(err, list)
    {
        if(err)
            console.log(err);
        for(var i = 0; i < list.length; i++)
        {
            console.log(list[i]);
        }
    }
);