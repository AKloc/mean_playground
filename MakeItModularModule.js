/**
 * Created by andy on 8/14/14.
 */

module.exports = function (filePath, filter, callback)
{
    var fs = require('fs');
    var ps = require('path');
    filter = "." + filter;

    var fileList = [];

    return fs.readdir(filePath, function (err, list)
    {
        if(err)
            return callback (err);

        for (var i = 0; i < list.length; i++) {
            //console.log("Ext name: " + ps.extname(list[i]));
            if (ps.extname(list[i]) == filter)
            {
                fileList.push(list[i]);
            }
        }

        // err could be null here as well.
        return callback(err, fileList);
    });
};