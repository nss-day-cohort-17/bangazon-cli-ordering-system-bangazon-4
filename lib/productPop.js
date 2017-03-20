'use strict'

module.export = () => {
  new Promise((resolve, reject) => {
    db.each(`SELECT products.product_name "Product Name",
    SUM(products.payment_price) "Popular Product Total"
    FROM products
    JOIN order_line_items
    ON products.product_id = order_line_items.product_id
    GROUP BY order_line_items.product_id`, (err, row)=>{
      console.log("row", row);
    })
  });
}
