# mongoose-crud

List of book routes

Route | HTTP | Description
------------ | ------------- | --------------|
 /api/books | GET | Get all books info
 /api/books/:id | GET | Get a single book info
 /api/books| POST | Create a book
 /api/books/:id | DELETE | Delete a book
 /api/books/:id|PUT|Update a book with new info

 List of customer routes

Route | HTTP | Description
------------ | ------------- | --------------|
 /api/customers | GET | Get all customers info
 /api/customers/:id | GET | Get a single customer info
 /api/customers| POST | Create a customer
 /api/customers/:id | DELETE | Delete a customer
 /api/customers/:id|PUT|Update a customer with new info

 List of transaction routes

Route | HTTP | Description
------------ | ------------- | --------------|
 /api/transactions | GET | Get all transactions info
 /api/transactions/:id | GET | Get a single transaction info
 /api/transactions| POST | Create a transaction
 /api/transactions/:id | DELETE | Delete a transaction
 /api/transactions/:id|PUT|Update a transaction with new info

## Usage

```
npm install
npm start
```

### Additional Info 

**Required Information for Requests**

Books

Route | HTTP|Headers | Body 
------- | -|----------- | ----
/api/books|GET | none | none
/api/books/:id| GET | none | none
/api/books|POST| none| isbn, title,author, category, stock
/api/books/:id | DELETE | none | none
/api/books/:id | PUT | none | isbn, title,author, category, stock

Customers

Route | HTTP|Headers | Body 
------- | -|----------- | ----
/api/customers|GET | none | none
/api/customers/:id| GET | none | none
/api/customers|POST| none| name, memberid,address, zipcode, phone
/api/customers/:id | DELETE | none | none
/api/customers/:id | PUT | none | name, memberid,address, zipcode, phone

Transactions

Route | HTTP|Headers | Body 
------- | -|----------- | ----
/api/transactions|GET | none | none
/api/transactions/:id| GET | none | none
/api/transactions|POST| none| isbn, title,author, category, stock
/api/transactions/:id | DELETE | none | none
/api/transactions/:id | PUT | none | member, days,out_date, in_date, due_date,fine,booklist