const departmentService = require('../services/department.service');

const createDepartment = async (req, res) => {
    const { department } = req.body;
    const info = {department}
    const data = await departmentService.createDepartment(info);
    res.status(data.error ? 404 : 201).json(data);
}

module.exports = {createDepartment};