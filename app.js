
var prompt = require('prompt'),
    config = require('./config/config.js'),
    csv = require('fast-csv'),
    fs = require('fs'),
    _ = require('lodash');

var writeStream = fs.createWriteStream("modify.csv"),
    csvWriteStream = csv.createWriteStream({headers : false});
// Pipe the edited data into the new csv file.
csvWriteStream.pipe(writeStream);

// Luhn Algorithm is used to identify credit card and account numbers of the users
// Algorithm can be found on GeeksForGeeks or StackOverflow
function LuhnAlgo(data) {
    var digits = data.split('');
    num = 0;
    for(var i = 0;i<digits.length;i++) {
        var tempDigits = 2*parseInt(digits[i]);
        var addDigits = 0;
        var tempDigitsArray = tempDigits.toString().split('');
        for(var k = 0;k<tempDigitsArray.length;k++) 
            addDigits = addDigits + parseInt(tempDigitsArray[k]);
        num = num + addDigits;
    }
    console.log(digits);
    console.log(num);
    
    if(num%10 == 0) 
        return true;
    else 
        return false;
   
    
}
// End of luhn Algo implementation

// Implementation of the transform and trim function
function transformData(data) {
    data  = data.split(" "); //Splits the string with spaces
    console.log(data.length);
    var transformedData = '';
    for(var i = 0;i<data.length;i++) {
        // If the data is not a number then check for the implementation of the luhn algorthim
        
        if(!isNaN(data[i])) { 
            if(LuhnAlgo(data[i])) {
                if(data.length <= 12) 
                    data[i] = config.altAccNo;
                else 
                    data[i] = config.altCC;
            } //If true returned
            else {
                data[i] = data[i];
            }
        }
        else 
            data[i] = data[i];
        
        transformedData = transformedData + data[i] + " ";
    }
    
    // for(var i = 0;i<data.length;i++) {
    //     console.log(data[i]);
        
    // }
    return transformedData;
}
    
// Scan path of csv file
var path;
prompt.start();
prompt.get(['csvPath'], function(err,result) {

    path = result.csvPath; //Set the input path to 'path' variable
    console.log(path);

    var readStream = fs.createReadStream(path); //Create a read stream that reads data from the given csv path

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
            console.log('data'+i);
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





