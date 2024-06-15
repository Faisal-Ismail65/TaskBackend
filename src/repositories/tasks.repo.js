const TaskModel = require('../models/task.model')



const getAllTasks = async () =>{
    return await TaskModel.find()
}

const createTask = async (title, description) => {
    return await TaskModel.create({title,description})
}

const updateTask = async (id,status) =>{
    return await TaskModel.findByIdAndUpdate(id,{status},{new:true})
}



const deleteTask = async (id) =>{
    return await TaskModel.findByIdAndDelete(id)
}


const findOneById = async(id)=>{
    return await TaskModel.findById(id)
}


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    findOneById
}