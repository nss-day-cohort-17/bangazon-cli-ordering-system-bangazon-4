'use strict'

const { argv: [,,...args] } = process

var prompt = require('prompt')

prompt.start()

prompt.get(['Which customer is active?'], function (err, result) {
  console.log('command-line input received:')
  console.log(result)
  console.log(args)
})


const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');

//list of all customers
module.exports.getCustomer = () => {

  return new Promise((resolve, reject)=> {
    db.all(`SELECT customer_id, first_name ||" " || last_name AS "Name" FROM customers`, (err, customers)=>{
      if(err) {
        reject(err)
      } else {
        resolve(customers)
      }
    })
  })
};

// module.exports.getCustomer()
// .then((customers)=>{
//   customers.forEach((each)=>{
//     console.log(`${each.customer_id} ${each.Name}`);
//   })
// })
// .catch((err)=>{
//   console.log(err)
// });


//select a customer
module.exports.getBuyer = () => {

  return new Promise((resolve, reject)=>{
    db.get(`SELECT * FROM customers WHERE customer_id = 1`, (err, data)=>{
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  });
};
// module.exports.getBuyer()
// .then((data) => {
//   console.log(data)
// })
// .catch((err) => {
//   console.log(err)
// });
