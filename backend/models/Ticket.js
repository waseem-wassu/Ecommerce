const mangoose = require('mongoose');

const TicketSchema = new mangoose.Schema({
    name:{
        type:String
    },
    number:{
        type:String
    },
    status:{
        type:String
    },
},
   { timestamps : true}
)

module.exports = mangoose.model('Ticket',TicketSchema);