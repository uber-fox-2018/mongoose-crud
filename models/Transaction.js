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

    this.find({out_date:})
    .then((obj)=>{
        console.log("ini",obj)
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log("---->",updatedItem)

    if(updatedItem.in_date){
        console.log("====", getFine(this.due_date, updatedItem.in_date))
        console.log("===>>>>masuk hook!! muawaahahhahahah")
        
        this.update({}, {fine:getFine(updatedItem.in_date)})
        

    } 
    next()
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;