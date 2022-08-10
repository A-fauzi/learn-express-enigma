const employeeService = (employeeRepository) => {

    const {create, list, getById, update, deleteEmployee} = employeeRepository

    const registerEmployee = async (newEmployee) => {
        try {
            return await create(newEmployee);
        }catch (e) {
            console.log(e.message)
        }
    }
    const findAllEmployee = async () => {
        try {
            return await list()
        }catch (e) {
            console.log(e.message)
        }
    }
    const findAllEmployeeById = async (id) => {
        try {
            return await getById(id)
        }catch (e) {
            console.log(e.message)
        }
    }
    const updateEmployee = async (id, payload) => {
        try {
            return await update(id, payload)
        }catch (e) {
            console.log(e.message)
        }
    }
    const removeEmployee = (id) => {
        try {
            return deleteEmployee(id)
        }catch (e) {
            return e.message
        }
    }

    return { registerEmployee, findAllEmployee, findAllEmployeeById, updateEmployee, removeEmployee }

}

module.exports = employeeService