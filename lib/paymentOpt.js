'use strict';

module.exports = () => {
  new Promise((resolve, reject) => {
    db.each(`SELECT * FROM payment_options`, (err, row)=>{
      console.log("row", row);
    })
  });
}


// prompt -- returns object of payment type and account number

// const { argv: [,,...args] } = process

// var prompt = require('prompt')

// prompt.start()

// prompt.get(['Enter payment type', 'Enter account number'], function (err, result) {
//   console.log('command-line input received:')
//   console.log(result)
//   console.log(args)
// })
