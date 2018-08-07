# mongoose-crud
mongoose-crud


## REST API
List of books routes:

Route | HTTP | Description
--- | --- | ---
/api/books | GET | Get all the books info
/api/books/:id | GET | Get a single book
/api/books | POST | Create a book
/api/books/:id | DELETE | Delete a book
/api/books/:id | PUT | Update a book with new info

List of books customers:

Route | HTTP | Description
--- | --- | ---
/api/customers | GET | Get all the customers info
/api/customers/:id | GET | Get a single customer
/api/customers | POST | Create a customer
/api/customers/:id | DELETE | Delete a customer
/api/customers/:id | PUT | Update a customer with new info

List of books transactions:

Route | HTTP | Description
--- | --- | ---
/api/transactions | GET | Get all the transactions info
/api/transactions/:id | GET | Get a single transaction
/api/transactions | POST | Create a transaction
/api/transactions/:id | DELETE | Delete a transaction
/api/transactions/:id | PUT | Update a transaction with new info


## Usage
With only npm:
```
npm install
npm run dev
```

Access the API via `http://localhost:3000/api/`