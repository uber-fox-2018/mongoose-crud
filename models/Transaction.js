const mongoose = require('mongoose');
const getFine =  require('../helpers/getFine');

const transactionSchema = new mongoose.Schema({
    member: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Customer"
    },
    days : {
        type: Number, 
    },
    out_date : {
        type: Date,
    },
    due_date : {
        type: Date,
    },
    in_date : {
        type: Date,
        default : undefined
    },
    fine :{
        type : Number,
        default : 0
    },
    booklist:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book"
    }]
}, {timestamps:true});

transactionSchema.pre('update', function(next){
    let updatedItem = this.getUpdate()    
    if(updatedItem.in_date){
        this.update({}, {fine:getFine(updatedItem.due_date, updatedItem.in_date)})
        
    } 
    next()
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;