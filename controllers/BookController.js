const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';

module.exports = {
    index: (req, res) => {

        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            console.log("Connected correctly to server");
            const db = client.db(dbName);

            db.collection('books').find().toArray(function(err, docs) {
                res.status(200).json({
                    "msg": "Success find all books",
                    "data": docs
                })
                client.close();
            });
            
        });
                
    },

    show: (req, res) => {

        let isbn = req.params.isbn
        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            const db = client.db(dbName);
        
            // FindOne a single document
            db.collection('books').findOne({isbn:isbn}, function(err, record) {       
                res.status(200).json({
                    "msg": `Success find book id ${isbn}`,
                    "data": record
                })
                client.close();
            });
        }); 
        
    }, 

    create: (req, res) => {
        let newBook = {
            "isbn": req.body.isbn,
            "title": req.body.title,
            "author": req.body.author,
            "category": req.body.category,
            "stock": req.body.stock
        }

        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            const db = client.db(dbName);
        
            // Insert a single document
            db.collection('books').insertOne(newBook, function(err, record) {       
                res.status(201).json({
                    "msg": "Success for add new book"
                }) 
                client.close();
            });
        });

    }, 

    delete: (req, res) => {
        let isbn = req.params.isbn
        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            const db = client.db(dbName);
        
            // Delete a single document
            db.collection('books').deleteOne({isbn:isbn}, function(err, record) {       
                res.status(201).json({
                    "msg": "Success delete a book",
                }) 
                client.close();
            });
        });        
    }, 

    update: (req, res) => {
        let isbn = req.params.isbn
        let aBook = {
            "isbn": req.body.isbn,
            "title": req.body.title,
            "author": req.body.author,
            "category": req.body.category,
            "stock": req.body.stock
        }

        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            const db = client.db(dbName);
        
            // Insert a single document
            db.collection('books').updateOne({isbn:isbn}, {$set: aBook} ,function(err, record) {       
                res.status(201).json({
                    "msg": "Success for update a book"
                }) 
                client.close();
            });
        });
        
    }
     
}