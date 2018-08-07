const Trans = require('../models/transaction.js')

class Controller{

    static create(req,res){
        Trans.create({
            member : req.body.member,
            days : req.body.days,
            booklist : req.body.booklist
        },function(err,data){
            if(err) return handleError(err)
            res.json(data)
        })
    }

    static allData(req,res){
        Trans.find({})
        .populate('member')//from model
        .populate('booklist')
        .exec(function(err,data){
            if(err){
                res.status(400).json(err)
            }else{
                res.json(data)
            }
        })
    }

    static find(req,res){
        Trans.find({_id :req.params.id})
        .populate('member')
        .populate('booklist')
        .exec(function(err,data){
            res.json(data)
        })
    }

    static update(req,res){
        Trans.updateOne({
            _id : req.params.id
        },{
            $set : {
                days : req.body.days
            }
        })
        .exec(function(err,data){
            res.json(data)
        })
    }

    static deleteData(req,res){
        Trans.deleteOne({
            _id : req.params.id
        },function(err,data){
            if(err){
                res.status(400).json(err)
            }else{
                res.json(data)
            }
        })
    }
}

module.exports = Controller