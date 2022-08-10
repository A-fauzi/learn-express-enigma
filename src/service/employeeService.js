const employeeService = (employeeRepository) => {
    const {create, list, getById, update, deleteEmployee} = employeeRepository

    const registerEmployee = (newEmployee) => {
        return create(newEmployee)
    }
    const findAllEmployee = () => {
        return list()
    }
    const findAllEmployeeById = (id) => {
        return getById(id)
    }
    const updateEmployee = (id, payload) => {
        update(id, payload)
    }
    const removeEmployee = (id) => {
        deleteEmployee(id)
    }

    return { registerEmployee, findAllEmployee, findAllEmployeeById, updateEmployee, removeEmployee }

}

module.exports = employeeService