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
        } catch (e) {
            console.log(e.message)
            res.json(Response().errorMessage('XX', e.message))
        }
    }

    const listEmployee = async (req, res) => {
        try {
            const employee = await employeeServicee.findAllEmployee()
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
        } catch (e) {
            console.log(e.message)
        }
    }

    const getEmployee = async (req, res) => {
        try {
            const id = req.params.id
            const employee = await employeeServicee.findAllEmployeeById(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
        } catch (e) {
            console.log(e.message)
        }
    }

    const updateEmployee = async (req, res) => {
        try {
            const id = req.params.id
            const upPayload = req.body
            const employee = await employeeServicee.updateEmployee(id, upPayload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
        } catch (e) {
            console.log(e.message)
        }
    }
    const deleteEmployee = (req, res) => {
        try {
            const id = req.params.id
            const employee = employeeServicee.removeEmployee(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee))
        } catch (e) {
            return e.message
        }
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