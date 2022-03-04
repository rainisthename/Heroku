const express = require('express')
const cors = require('cors');
const app = express();
const port = 5000;
const connectDb = require('./db/connect')
///Require DOTENV

require('dotenv').config()
//MiddleWare
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Origin', '*')

//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE')
//         return res.status(200).json({})
//     }
//     next();
// });

//req router
const router = require('./routes/crud')
///Route

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))


app.use('/api/v1/crud', router)
//Connection




const start = async () =>{
    try {
        await connectDb(process.env.MONGO_CONNECT);
        app.listen(port,(req, res) =>{
            console.log('You are listening to port :', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start()