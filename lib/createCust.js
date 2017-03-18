'use strict';

const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');

module.exports.createCust = () => {

  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO customers VALUES(null, "Ashley", "Irwin", "3131 Eastland St", "NSS", "Software", "31313", "615-678-2121")`,
      (err, data)=>{
        if(err) {console.log(err)}
          else{
            resolve(data);
            let customer = data;
            console.log(customer);
          }
    });
  })
};
