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

    return {
        create, list, getById
    }
}

module.exports = employeeRepository