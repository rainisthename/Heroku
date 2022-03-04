const express = require('express')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const connectDb = require('./db/connect')
///Require DOTENV

require('dotenv').config()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE')
        return res.status(200).json({})
    }
    next();
});

//req router
const router = require('./routes/crud')
///Route

app.use(express.json())
// app.use(cors({
//     origin: 'https://freedom-wall1337.herokuapp.com/Freedomwall'
// }))


app.use('/api/v1/crud', router)
//Connection




const start = async () =>{
    try {
        await connectDb(process.env.MONGO_CONNECT);
        app.listen(PORT,(req, res) =>{
            console.log('You are listening to port :', PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

start()