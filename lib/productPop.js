'use strict'
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite')

module.exports = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT products.product_name Product, COUNT(order_line_items.order_id) "Orders" , COUNT (orders.customer_id) "Customers", SUM(products.payment_price) Total
    FROM products
    JOIN order_line_items
    ON products.product_id = order_line_items.product_id
    JOIN orders
    ON orders.order_id = order_line_items.order_line_id
    GROUP BY order_line_items.product_id
    ORDER BY order_line_items.order_id`, (err, row)=>{
      if (err) {
        reject(err)
        console.log(err);
      }else{
        resolve(row);
      }
    })
  });
}
module.exports()
.then((row)=>{
  row.forEach((each)=>{
      console.log(each.Product, each.Orders, each.Customers, each.Total);
    })
})
.catch((err)=>{

  console.log("err", err);
})
