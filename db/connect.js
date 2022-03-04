const mongoose = require('mongoose')

const connectDb = (url) => {
    return mongoose.connect(url, {
        usenewurlParser: true, useUnifiedTopology: false
    })
}

module.exports = connectDb