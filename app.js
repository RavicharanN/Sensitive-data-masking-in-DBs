
var prompt = require('prompt'),
    config = require('./config/config.js'),
    csv = require('fast-csv'),
    fs = require('fs');

var writeStream = fs.createWriteStream("modify.csv"),
    csvWriteStream = csv.createWriteStream({headers : false});
// Pipe the edited data into the new csv file.
csvWriteStream.pipe(writeStream);

// Implementation of the transform and trim function
function transformData(data) {
    data  = data.split(" ").split("-"); //Spits the string with spaces and '-'
}
    
// Scan path of csv file
var path;
prompt.start();
prompt.get(['csvPath'], function(err,result) {

    path = result.csvPath; //Set the input path to 'path' variable
    console.log(path);

    var readStream = fs.createReadStream("test.csv"); //Create a read stream that reads data from the given csv path

    // Set parameters according to environment - (Look into ReadMe for further details)
    var env = process.env.NODE_ENV || 'development';
    if(env === 'development') {
        // Set params for development mode
    }
    else {
        // Set pararms for production mode
    }
    // End of block

    // Read and modify the csv file 
    csv.fromStream(readStream,{headers : false})
    .transform(function(data) {
        for (var i = 0; i<data.length ; i++) {
            data[i] = transformData(data[i]);
            // console.log(data[i]);
        }
        var writeData = [ data[0],data[1] ];
        csvWriteStream.write(writeData);
        console.log(writeData);
    })
    .on("end",function(data){
        console.log("end");
    })
})





