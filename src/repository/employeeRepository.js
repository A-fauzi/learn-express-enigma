const DbQuery = require("../config/db_query");
const EmployeeDto = require('../repository/employee.dto')

const employeeRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(DbQuery().INSERT_BIODATA,
                [
                    payload.firstname,
                    payload.lastname,
                    payload.dob,
                    payload.pob,
                    payload.address,
                    payload.marital_status,
                ]
            )
            return EmployeeDto(result)
        }catch (e) {
            console.log(e.message)
        }
        return payload
    }

    const list = async () => {
        try {
            const result = await db.query(DbQuery().SELECT_BIODATA)
            const employee = []
            for (let i = 0; i < result.rows.length; i++) {
                employee.push(EmployeeDto(result, i))
            }
            return employee
        }catch (e) {
            console.log(e.message)
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_BIODATA_ID, [id])
            return result.rows[0]
        } catch (e){
            console.log(e.message)
        }
    }

    const updateEmployee = async (id, payload) => {
        try {
            const result = await db.query(DbQuery().UPDATE_BIODATA,
                [
                    payload.firstname,
                    payload.lastname,
                    payload.dob,
                    payload.pob,
                    payload.address,
                    payload.marital_status,
                ]
            )
            return EmployeeDto(result)
        }catch (e) {
            console.log(e.message)
        }
    }
    const deleteEmployee = (id) => {

    }

    return {
        create, list, getById,updateEmployee, deleteEmployee
    }
}

module.exports = employeeRepository