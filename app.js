

var prompt = require('prompt'),
    config = require('./config/config.js'),
    csv = require('fast-csv'),
    fs = require('fs'),
    stream = fs.createReadStream("test.csv");

// Scan path of csv file
var path;
prompt.start();
console.log('Please enter the path to csv file');
prompt.get(['csvPath'], function(err,result) {

    path = result.csvPath; //Set the input path to 'path' variable
    console.log(path);

    // Set parameters according to environment - (Look into REadMe for further details)
    var env = process.env.NODE_ENV || 'development';
    if(env === 'development') {
        //Set params for development mode
    }
    else {
        // Set pararms for production mode
    }
    // End of block
        

})





