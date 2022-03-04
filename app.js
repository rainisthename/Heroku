const express = require('express')
// const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const connectDb = require('./db/connect')
///Require DOTENV

require('dotenv').config()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001/Freedomwall')
    res.header('Access-Control-Allow-Origin', '*')


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