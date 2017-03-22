'user strict'
const { argv: [,,...args] } = process

var prompt = require('prompt')

prompt.start()

prompt.get([''], function (err, result) {
  console.log('command-line input received:')
  console.log(result)
  console.log(args)
})

// the entire list of products should populate the terminal, all items must come back to the list after added






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
