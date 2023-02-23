const express = require('express');
require('./config/db')
const cors = require('cors');


const app = express();

app.use(cors({ origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/public',express.static('public'))

app.use('/ticket',require('./routes/Ticket'));

const PORT = 3005;

app.listen(PORT,() => {
    console.log(`The server is running on port ${PORT}`)
})