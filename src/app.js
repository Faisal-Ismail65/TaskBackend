const express = require('express')
const cors = require('cors')

const APIS = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())




app.use('/v1',APIS)





module.exports  = app