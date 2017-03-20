'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite')

module.exports = () => {
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
module.exports()
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log("err", err);
});
