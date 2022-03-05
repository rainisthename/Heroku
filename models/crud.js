const mongoose = require('mongoose')


const CrudSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Provide a Name'],
        trim: true,
        maxlength: [50, 'Name must be less than 50 characters']

    },
    comment: {
        type: String, 
        maxlength: [200, 'Name must be less than 200 characters'],
        completed: {
            type: Boolean,
            default: false,

        }
    },
    school: {
        type: String, 
        completed: {
            type: Boolean,
            default: false,

        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Crud', CrudSchema)