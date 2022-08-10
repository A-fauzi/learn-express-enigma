const employeeService = (employeeRepository) => {
    const {create, list, getById, update, deleteEmployee} = employeeRepository

    const registerEmployee = (newEmployee) => {
        return create(newEmployee)
    }
    const findAllEmployee = () => {
        return list()
    }
    const findAllEmployeeById = (id) => {
        getById(id)
    }
    const updateEmployee = (id, itemsObj) => {
        update(id, itemsObj)
    }
    const removeEmployee = (id) => {
        deleteEmployee(id)
    }

    return { registerEmployee, findAllEmployee, findAllEmployeeById, updateEmployee, removeEmployee }

}

module.exports = employeeService