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
