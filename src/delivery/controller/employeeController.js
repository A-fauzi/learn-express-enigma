const employeeService = require('../../service/employeeService')
const employeeRepository = require('../../repository/employeeRepository')
const Response = require('../../utils/response')
const db = require("../../config/db");

const employeeController = () => {

  const employeeServicee = employeeService(employeeRepository(db))
  const createEmployee = async (req, res) => {
    try {
      const payload = req.body
      const newEmployee = await employeeServicee.registerEmployee(payload)
      res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee))
    }catch (e) {
      console.log(e.message)
      res.json(Response().errorMessage('XX', e.message))
    }
  }
  
  const listEmployee = async (req, res) => {
    const employee = await employeeServicee.findAllEmployee()
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
  }

  const getEmployee = async (req, res) => {
    const id = req.params.id
    const employee = await employeeServicee.findAllEmployeeById(id)
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
  }
  const updateEmployee = (req, res) => {
    const id = req.params.id
    const upPayload = req.body
    const employee = employeeServicee.updateEmployee(id, upPayload)
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
  }
  const deleteEmployee = (req, res) => {
    const id = req.params.id
    const employee = employeeServicee.removeEmployee(id)
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
  }

  return {
    createEmployee,
    listEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee
  }
  
}

module.exports = employeeController