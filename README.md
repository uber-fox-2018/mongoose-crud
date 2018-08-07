# Library
**Mongoose CRUD**

List of routes books

| **Route** | **HTTP** | **Description** |
|-------|------|-------------|
| /api/books | POST | Create new book |
| /api/books | GET | Get all books |
| /api/books/:id | PUT | Update book |
| /api/books/:id | DELETE | Delete book |

List of routes customers

| **Route** | **HTTP** | **Description** |
|-------|------|-------------|
| /api/customers | POST | Create new customers |
| /api/customers | GET | Get all customers |
| /api/customers/:id | PUT | Update customers |
| /api/customers/:id | DELETE | Delete customers |

List of routes transactions
| **Route** | **HTTP** | **Description** |
|-------|------|-------------|
| /api/transactions | POST | Create new transactions |
| /api/transactions | GET | Get all transactions |
| /api/transactions/:id | PUT | Update transactions |
| /api/transactions/:id | DELETE | Delete transactions |

**Usage**
with only npm
```
npm install
npm start
```

Access via website  https://enigmatic-coast-51324.herokuapp.com/
or http://localhost:5000/api/books 

Access via terminal
```
Add new book: 
curl --data "isbn=827-281829-28182-9&title=Learn+Mongoose&author=Ari+Sup
riatna&category=All+Ages&stock=25" https://enigmatic-coast-51324.herokuapp.com/api/books

Get all books:
curl -X GET https://enigmatic-coast-51324.herokuapp.com/api/books
```
