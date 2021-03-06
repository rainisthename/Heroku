const express = require('express')
const router = express.Router();

const {getAllData, createData} 
= require('../controllers/crud')

router.route('/').get(getAllData).post(createData)
// router.route('/:itemID').get(getOneItem).delete(deleteData)


module.exports = router;