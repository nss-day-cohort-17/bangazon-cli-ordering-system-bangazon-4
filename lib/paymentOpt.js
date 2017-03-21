'user strict';

const { Database } = require("sqlite3").verbose();
const db = new Database('bangazon.sqlite')
const { argv: [,,...args] } = process
const prompt = require('prompt')


 var schema = {
    properties: {
      payment_options: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Choose a payment option',
        required: true
      },
        payment_account: {
        pattern: /^[0-9]+$/,
        message: 'Choose a payment option',
        required: true
      },
    }
  };

prompt.start()
//prompt user to select a customer
prompt.get(schema, function (err, result) {
  newPaymentOpt(result).then((result) => {
              console.log(result)
              })
              .catch((err) => {
                console.log(err)
              });
  console.log('command-line input received:')
  console.log(result)
  console.log(args)
})


//create a new payment option
let newPaymentOpt = (result) => {

  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO payment_options VALUES(null, '${result.payment_options}', ${result.payment_account})`, (err, data)=>{
      if(err) {
        reject(err)
      } else {
        resolve("I'm in the money")
      }
    });
  });
}
// module.exports.newPaymentOpt().then((val)=>{
//                               console.log(val)
//                             })
//                             .catch((err)=>{
//                               console.log(err)
//                             });


module.exports = () => {
  return new Promise((resolve, reject) => {
    db.each(`SELECT * FROM payment_options`, (err, data)=>{
      if (err) {
        reject(err)
        console.log(err);
      }else {
        resolve(data)
      }
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

// module.exports()
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log("err", err);
// });
