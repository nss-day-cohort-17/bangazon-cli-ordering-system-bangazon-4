'use strict'

const { argv: [,,...args] } = process
var prompt = require('prompt')

 var schema = {
    properties: {
      customer_id: {
        pattern: /^[1-9]+$/,
        message: 'Which customer is active?',
        required: true
      },
    }
  };

prompt.start()
//prompt user to select a customer
prompt.get(schema, function (err, result) {
  getBuyer(result).then((result) => {
              console.log(result)
              })
              .catch((err) => {
                console.log(err)
              });
  console.log('command-line input received:')
  console.log(result)
  console.log(args)
})

const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');

//list of all customers
module.exports.getCustomer = (result) => {

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

module.exports.getCustomer()
.then((customers)=>{
  customers.forEach((each)=>{
    console.log(`${each.customer_id} ${each.Name}`);
  })
})
.catch((err)=>{
  console.log(err)
});


//get a customer
let getBuyer = (result) => {

  return new Promise((resolve, reject)=>{
    db.get(`SELECT * FROM customers WHERE customer_id = ${result.customer_id}`, (err, data)=>{
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  });
};
