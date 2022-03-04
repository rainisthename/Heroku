
const { exists } = require('../models/crud')
const CrudSchema = require('../models/crud')

const getAllData = async (req, res) => {
    try {
        const crud = await CrudSchema.find({})
        res.status(200).json({crud})
    } catch (error) {
        res.status(500).json({message: error})
        
    }
}
const createData = async (req, res) => {
    try {
        const crud = await CrudSchema.create(req.body)
        res.status(201).json({crud})
    } catch (error) {
        res.status(500).json({message: error})
        
    }
}
// const getOneItem = async (req, res) => {
//   try {
//     const {itemID:crudId} = req.params;
//     const crud = await CrudSchema.findOne({_id:crudId})
 
//     if (!crud) {
//         return res.status(404).json({message: 'Item doesnt exists.'})
//     }
 
//     res.status(200).json({crud})
//   } catch (error) {
//     res.status(500).json({message: error})
      
//   }
// }

// const deleteData = async (req, res) => {
    
//     try {
//         const {itemID:crudId} = req.params;
//         const crud = await CrudSchema.findByIdAndDelete({_id:crudId})

//         if (!crud) 
//         {
//             res.status(44).json({message: 'File doesnt exist'})
//         }

//         res.status(200).json({crud})
//     } catch (error) {
//         res.status(500).json({message:'ID not found'})
//     }
// }

module.exports = {
    getAllData,getOneItem,deleteData,createData
}