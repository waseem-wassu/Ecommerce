const mangoose = require('mongoose');

const conn = mangoose.connect('mongodb://localhost:27017/TicketTask',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4,

},(err) => {
    if(!err) { console.log('MongoDB Connection Succeeded......')}
    else { console.log('Error in DB Connection : ' +err)}
})

module.exports = conn;