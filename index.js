const express = require('express');

const Product = require('./models/products');
const app = express();
require('./db/db');
app.use(express.urlencoded({ extended: false }))

app.use(express.json());

const port = 3000;

// const dogs = [
//     {name: "Jimbob", breed:"Husky"},
//     {name: "Sam", breed:"Lab"},
// ]

// app.get("/dogs/:id", (req, res) => {
//     res.json(dogs[parseInt(req.params.id) - 1]);
// });

//method1 with .then and .catch()
app.post("/addProduct", (req, res) => {
    // const addDog = Dog
    const {name, price, qty, Description} = req.body
    Product.create({
        name, 
        price,
        qty,
        description:Description
    })
    .then(response => {
        console.log(response);
        res.status(201).json({status:1, response});
    })
    .catch(error => console.log(error));
});

app.get("/getProducts", function(req, res){
    // const dogs = Dog
    Product.find().then(response => {
        res.status(200).json({
            status:1,
            products: response
        })
    })
    .catch(error => console.log(error));
})
//for getting
app.post("/getProduct", (req, res) => {
    // const dogs = Dog
    const{_id} = req.body
    Product.findOne({_id}).then(response => {
        res.status(200).json({
            status:1,
            products: response
        })
    })
    .catch(error => console.log(error));
})

app.put("/updateProduct", (req, res) => {
    const {id, name, price, qty, description} = req.body 
    console.log(id, name)
    Product.updateOne({_id:id}, {
        name,
        price,
        qty,
        description
    })
    .then(response => {
        res.status(200).json({
            status:1,
            products: response
        })
    })
    .catch(error => console.log(error));
})

app.delete("/deleteProduct", (req, res) => {
    const {_id} = req.body 
    console.log(_id)
    Product.findByIdAndDelete({
        _id
    })
    .then(response => {
        res.status(200).json({
            status:1,
            products: response
        })
    })
    .catch(error => console.log(error));
})
// app.put("/dogs/:id", (req, res) => {
//     console.log(req.params.id)
//     console.log(req.body);
//     res.json({message: `updated dog ${req.params.id}`});
// });

// app.delete("/dogs/:id", (req, res) => {
//     console.log(req.params.id);
//     res.json({message: `deleting dog ${req.params.id}`});
// });

app.listen(port, () => {
    console.log("port no",`${port}`);
    console.log(`Listening on port ${port}`);
});

//CRUD = create, read, update and delete
//HTTP => POST, GET, PUT/PATCH, DELETE