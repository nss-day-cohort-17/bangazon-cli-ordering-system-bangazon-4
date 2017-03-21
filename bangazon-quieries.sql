-- insert new customer
INSERT INTO customers
(customer_id, first_name, last_name, address, city, state, postal_code, phone_number)
VALUES (null, "Sean", "Plummer", "2121 West Gate", "Chicago", "Illinois", "23412",  "933-l97-0981");

SELECT customer_id, first_name, last_name FROM customers;

SELECT first_name, last_name FROM customers WHERE customer_id = 4;

SELECT payment_options FROM customers, payment_options WHERE customer.customer_id = payment_options.customer_id;
