'use strict';

const { argv: [,,...args] } = process

var prompt = require('prompt')
// require prompt

prompt.start();
// start the prompt

// get properties needed from the user
prompt.get(['name', 'address', 'city', 'state', 'zipcode', 'phone'], function (err, result) {
// log results

  console.log('command-line input received:')
  console.log(' Name: ' + result.name)
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
