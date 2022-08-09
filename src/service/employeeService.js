const employeeService = (employeeRepository) => {
    const {create, list, getById} = employeeRepository

    const registerEmployee = (newEmployee) => {
        return create(newEmployee)
    }
    const findAllEmployee = () => {
        return list()
    }
    const findAllEmployeeById = (id) => {
        getById(id)
    }

    return { registerEmployee, findAllEmployee, findAllEmployeeById }

}

module.exports = employeeService