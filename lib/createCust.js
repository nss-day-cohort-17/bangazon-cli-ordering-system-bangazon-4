'use strict';


const { argv: [,,...args] } = process
var prompt = require('prompt')


  var schema = {
    properties: {
      First_name: {
        required: true
      },
       Last_name: {
        required: true
      },
       Address: {
        required: true
      },
       City: {
        required: true
      },
       State: {
        required: true
      },
       Zipcode: {
        required: true
      },
       Phone: {
        required: true
      },
    }
  };

prompt.start();

let getCustomer = () => {
        prompt.get(schema, function (err, result) {
                        createCust(result).then((val)=> {
                                      console.log(val)
                                    })
                                    .catch((err)=>{
                                    console.log(err)
                                    });

          // console.log(args)
        })
};
getCustomer()



const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');

//creates new customer
let createCust = (result) => {

  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO customers VALUES(null, '${result.First_name}', '${result.Last_name}', '${result.Address}', '${result.City}', '${result.State}', '${result.Zipcode}', '${result.Phone}')`,
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

module.exports = () => {
  getCustomer()
}
