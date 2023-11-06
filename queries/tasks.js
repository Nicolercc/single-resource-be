const db = require('../db/dbConfig')

const getAllTasks = async () => {

    try {
        const allTasks = await db.any("SELECT * FROM tasks")
        return allTasks
    }
    catch (error) {
        return error
        
    }
}





module.exports = { getAllTasks }