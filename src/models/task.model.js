const mongoose = require('mongoose')

const TaskModelName = 'Tasks'
const Schema = mongoose.Schema;

const TaskModel = new Schema({
    title: { type : String},
    description: {type : String},
    status : {type : String, default :'active'},
},
{
    timestamps : true,
    collection : TaskModelName
})

module.exports = mongoose.model(TaskModelName,TaskModel)




