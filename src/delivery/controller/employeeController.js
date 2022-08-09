const employeeService = require('../../service/employeeService')
const employeeRepository = require('../../repository/employeeRepository')
const Response = require('../../utils/response')

const employeeController = () => {
  const employeeServicee = employeeService(employeeRepository())

  const createEmployee = (req, res) => {
    const payload = req.body
    const newEmployee = employeeServicee.registerEmployee(payload)
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee))
  }
  
  const listEmployee = (req, res) => {
    const employee = employeeServicee.findAllEmployee()
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
  }

  const getEmployee = (req, res) => {
    const id = req.params.id
    const employee = employeeServicee.findAllEmployeeById(id)
    res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
  }

  return {
    createEmployee,
    listEmployee,
    getEmployee
  }
  
}

module.exports = employeeController