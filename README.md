# Sensitive data lookup and Trim 
An application built in NodeJs that recognises the sensitive data present in the database and trims it off. <br>
Built as a  part of a contest in TopCoder Open. [Here's](https://www.topcoder.com/challenges/30061753) the competition link.

## Dependencies and libraries used 

* fast-csv
* fs
* lodash
* prompt
* config-node 

## Working info of the  application 

The mirror of the database (Dummy DB) is stored in the csv file. The user enters the path to csv that needs to be modified. ```fast-csv``` and ```fs``` are used to read and process the rows of the csv file one at a time. ```lodash``` library is used in the operations that are used to transform the data. <br><br>
The application uses the ```Luhn Algorithm``` or ```Mod Ten Algorithm```  to recognise the sensitive data ( credit/debit card numbers, Account numbers ) present in the database. Every creditCard/AccountNo is replaced by the predefined string '<CREDIT_CARD>'/'<ACCOUNT_NO>', respectively, configured in the ```config``` directory. 
<br><br>
Variables used in the production mode or the development mode can be configured in the ```production.json``` or the ```development.json``` files resplectively. 
<br>
The data base entries are present in the ```test.csv``` file and the trimmed entries are written into the ```modify.csv``` file. Look into the files for the demo of the implementation.

## Running on your machine

```
cd Sensitive_DataLookup_and_Trim
npm install 
node app.js
<Input the path to csv file>
 ```
And you are ready to go!
