const express = require('express');
const employeeRouter = require('./employee.route');
const EmployeeService = require('../../service/employee.service');
const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeController = require('../controller/employee.controller')

const usersRouter = require('./users.route')
const UserService = require('../../service/users.service')
const UserRepository = require('../../repository/users.repository')
const UserController = require('../../delivery/controller/users.controller')

const db = require("../../config/db");
const router = express.Router();

const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next()
}
const usersService = (req, res, next) => {
    req.serviceUsers = UserService(UserRepository(db))
    next()
}
router.use('/employee', employeeService, employeeRouter(EmployeeController));
router.use('/users', usersService, usersRouter(UserController));

module.exports = router;