const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

//post Data
router.post('/addTicket',async(req,res)=>{
    try{
        let PostData = req.body;
        const AddTicketdata = await Ticket.create(PostData)
        res.status(200).json({status:1,message:"Data Added Successfully",AddTicketdata})
    }catch(error){
         res.status(500).json({status:0,error:error.message})
    }
})

//Get Api
router.get("/getTickets",async(req,res)=>{
    try{
        const tickets = await Ticket.find({})
        res.status(200).json({status:1,tickets})
    }catch(error){
        res.status(500).json({status:0,message:error.message})
    }
})

//Update Api
router.put('/UpdateTicketstatus/:id',async(req,res)=>{
    try{
       let fieldToUpdate = req.body;
       const UpdateTickets = await Ticket.findByIdAndUpdate({_id:req.params.id},{$set:{status:req.body.status}})
       res.status(201).json({status:1,message:"Updated",UpdateTickets})
    }catch(error){
       res.status(500).json({status:0,error:error.message,error})
    }
}
)




module.exports = router;