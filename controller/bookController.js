const Book = require('../models/book.js')


class Controller{

    static createData(req,res){
        Book.create({
            title : req.body.title,
            author : req.body.author,
            category : req.body.category
        },function(err,data){
            if (err){
                console.log(err)
            }else{

                res.json(data)
            }
        })
        
    }

    static showAll(req,res){
        Book.find(function(err,allData){
            if (err) return handleError(err);
            res.json(allData)
        })
    }

    static findbyId(req,res){
        Book.findById(req.params.id,function(err,data){
            if(err) return handleError(err)
            res.json(data)
        })
    }

    static deleteData(req,res){
        Book.deleteOne({
            _id : req.params.id
        },function(err,data){
            if(err) return handleError(err)
            res.json(data)
        })
    }

    static updateData(req,res){
        Book.updateOne({
            _id : req.params.id
        },{
            $set : {
                title : req.body.title,
                author : req.body.author,
                category : req.body.category
            }
        })
        .exec(function(err,data){
            res.json(data)
        })
    }


}

module.exports = Controller