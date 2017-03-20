'user strict';

const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite')

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
