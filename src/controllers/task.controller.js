const TaskRepo = require('../repositories/tasks.repo')



const getAllTasks = async (req,res) =>{
    try{
        const tasks = await TaskRepo.getAllTasks()
        res.status(200).json(tasks)
    }catch(err){
        res.status(400).json({error : err})
    }
}

const createTask = async(req,res) =>{
    try{
        const {title,description}  = req.body

        if(!(title || description)){
            return res.status(400).json({error : 'title and description are required'})
        }

        console.log('Creating Task ==========>')

        const task = await TaskRepo.createTask(req.body.title,req.body.description)
        res.status(201).json(task)
    }catch(err){
        res.status(400).json({error : err})
    }
}


const updateTask = async(req,res) =>{
    try{
        const {id} = req.params
        const {status} = req.body
        
        if(!status){
            return res.status(400).json({error : 'status is required'})
        }

        const taskExists = await TaskRepo.findOneById(id)

        if(!taskExists){
            return res.status(400).json({error : 'task not found'})
        }
        

        const task = await TaskRepo.updateTask(id,status)
        res.status(200).json(task)
    }catch(err){
        res.status(400).json({error : err})
    }
}


const deleteTask = async(req,res) =>{
    try{
        const {id} = req.params
        const taskExists = await TaskRepo.findOneById(id)        
        if(!taskExists){
            return res.status(400).json({error : 'task not found'})
        }
        
        const task = await TaskRepo.deleteTask(id)
        res.status(200).json('task deleted successfully')
    }catch(err){ 
        res.status(400).json({error : err})
    }  

}


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}
