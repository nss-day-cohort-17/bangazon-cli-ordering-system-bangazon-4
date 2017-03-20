'use strict';

module.exports = () => {
  new Promise((resolve, reject) => {
    db.each(`SELECT * FROM payment_options`, (err, row)=>{
      console.log("row", row);
    })
  });
}
