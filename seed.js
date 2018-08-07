const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'library';
const ObjectId = require('mongodb').ObjectId


class Mongo{
    static book(){
        MongoClient.connect(url, {useNewUrlParser: true},function(err, client) {
            const db = client.db(dbName);
            var collection = db.collection('books');
            
            collection.insertMany([
            {
                isbn: "987-1-60309-057-5",
                title: "Dragon Puncher",
                author: "James Kochalka",
                category: "All Ages",
                stock: 3
            }, {
                    isbn: "978-1-891830-77-8",
                    title: "Every Girl is the End of the World for Me",
                    author: "Jeffrey Brown",
                    category: "Mature(+16)",
                    stock: 5
            }
            ], function(err, result) {
            console.log(result);
            client.close()
            });
        });
    }

    static customers(){
        MongoClient.connect(url, {useNewUrlParser: true},function(err, client) {
            const db = client.db(dbName);
            var collection = db.collection('customers');
            
            collection.insertMany([
            {
                name: "Rubi Henjaya",
                memberid: "CL0001",
                address: "Ujung Berung Bandung",
                zipcode: "40294",
                phone: "0811223778"
            }, {
                    name: "Riza Fahmi",
                    memberid: "CL0002",
                    address: "Somewhere in Jakarta",
                    zipcode: "50022",
                    phone: "081122336655"
            }
            ], function(err, result) {
            console.log(result);
            client.close()
            });
        });
    }

    static transaction(){
        MongoClient.connect(url, {useNewUrlParser: true},function(err, client) {
            const db = client.db(dbName);
            var collection = db.collection('transactions');
            
            collection.insertMany([
            {
                member: ObjectId("5b44923544ceec54b206653b"),
                days: 6,
                out_date: '2016-04-19T14:56:59.301Z',
                due_date: '2016-04-25T14:56:59.301Z',
                in_date: '2016-04-27T14:56:59.301Z',
                fine: 2000,
                booklist: [
                    ObjectId("5b443c73746c3113729c9d8a"),
                    ObjectId("5b443c73746c3113729c9d8b")
                ]
            }
            ], function(err, result) {
            console.log(result);
            client.close()
            });
        });
    }
}


Mongo.transaction()