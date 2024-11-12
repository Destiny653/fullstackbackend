const Department = require('../models/Department');

const createDepartment = async (info) => {
    try { 
        const department = new Department(info);
      const data =  await department.save(); 
      if(data){
        return { 
            error: false, 
            message: 'Department created successfully', 
            data 
        };
      }
    } catch (error) {
        return {
            error: true,
            message: 'Faild create Department: '+error.message
        };     
    }
}

module.exports = {createDepartment};