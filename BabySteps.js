/**
 * Created by andy on 8/8/14.
 */
//console.log(process.argv);
var sum = 0;
for(var i = 2; i < process.argv.length; i++)
{
    //console.log("Reading " + process.argv[i]);
    sum += +process.argv[i];
}
console.log(sum);


/*
 var a = ["a", "b", "c"];
 a.forEach(function(entry) {
 console.log(entry);
 });
 */