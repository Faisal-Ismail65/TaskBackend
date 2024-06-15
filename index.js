
const mongoose = require('mongoose')

const app = require('./src/app')
require('dotenv').config()


const PORT = process.env.PORT || 8000


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database Connected');
    app.listen(PORT,()=>{
        console.log('Server is Running on Port ',PORT);
    })
})





