'user strict';

const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite')

//create a new payment option
module.exports.newPaymentOpt = () => {

  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO payment_options VALUES(null, "Pay-Pal", 89765093421)`, (err, data)=>{
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


module.exports.getPayment = () => {
  return new Promise((resolve, reject) => {
    db.each(`SELECT * FROM payment_options`, (err, data)=>{
      if (err) {
        reject(err)
        console.log(err);
      }else{
        resolve(data)
      }
    })
  });
}
// module.exports.getPayment()
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log("err", err);
// });


// prompt -- returns object of payment type and account number

// const { argv: [,,...args] } = process

// var prompt = require('prompt')

// prompt.start()

// prompt.get(['Enter payment type', 'Enter account number'], function (err, result) {
//   console.log('command-line input received:')
//   console.log(result)
//   console.log(args)
// })
