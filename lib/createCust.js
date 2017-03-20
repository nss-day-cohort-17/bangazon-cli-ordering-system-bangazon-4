'use strict';


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
