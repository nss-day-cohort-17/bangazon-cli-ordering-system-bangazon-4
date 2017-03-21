'use strict';


const { argv: [,,...args] } = process

  var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };

var prompt = require('prompt')
// require prompt

prompt.start();
// start the prompt
prompt.get(schema, function (err, result) {
// get properties needed from the user
// prompt.get(['First_Name', 'Last_Name', 'Address', 'City', 'State', 'Zipcode', 'Phone'], function (err, result) {
// log results

  console.log('command-line input received:')
  console.log(' First_Name: ' + result.First_Name)
  console.log(result)
  console.log(args)
})

module.exports = () => {

}




// Enter customer name
// >

// Enter street address
// >

// Enter city
// >

// Enter state
// >

// Enter postal code
// >

// Enter phone number
// >


const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');

//creates new customer
module.exports.createCust = () => {

  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO customers VALUES(null, "Ashley", "Irwin", "3131 Eastland St", "NSS", "Software", "31313", "615-678-2121")`,
      (err, data)=>{
        if(err) {
          reject(err)
          console.log(err)
        }
          else{
            resolve("success");
          }
    });
  })
};
// module.exports.createCust().then((val)=> {
//                             console.log(val)
//                           })
//                           .catch((err)=>{
//                             console.log(err)
//                           });

