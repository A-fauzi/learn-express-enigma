const employeeDB = []
const employeeRepository = () => {
    const create = (payload) => {
        return employeeDB.push(payload)
    }

    const list = () => {
        return employeeDB
    }

    const getById = (id) => {
        return employeeDB.find((e) => e.id === id)
    }
    const updateEmployee = (id, itemsObj) => {
        const indexOfObject = employeeDB.findIndex(object => {
            return object.id === id
        })
        employeeDB.splice(indexOfObject, 1, itemsObj)
    }
    const deleteEmployee = (id) => {
        const indexOfObject = employeeDB.findIndex(object => {
            return object.id === id
        })
        return employeeDB.splice(indexOfObject, 1)
    }

    return {
        create, list, getById,updateEmployee, deleteEmployee
    }
}

module.exports = employeeRepository