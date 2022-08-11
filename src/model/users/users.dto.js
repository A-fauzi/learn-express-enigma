const Users = require('./users')
module.exports = UsersDto = (result, index = 0) => {
    return Users(
        result.rows[index].id,
        result.rows[index].username,
        result.rows[index].email,
        // result.rows[index].password,
    )
}