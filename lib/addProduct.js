
'user strict';


const db = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');





let order = (order_id, product_id) => {

  return new Promise((resolve, reject)=>{
      db.all(`INSERT INTO order_line_items VALUES(null, ${order_id}, ${product_id})`, (err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve("submitted")
        }
      });
  });
};
