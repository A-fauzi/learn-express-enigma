const dbQueryUsers = () => {
    const INSERT_USERS = `INSERT INTO users (username,email,password) VALUES ($1, $2, $3) RETURNING *`;
    const SELECT_USERS_LIST = `SELECT id,username,email,password from users order by id desc`;
    const SELECT_USERS_ID = `SELECT id,username,email,password from users where id = $1`;
    const SELECT_USERS_SEARCH = `SELECT id,username,email,password from users where username ilike $1 or email ilike $1`
    const DELETE_USERS = `DELETE FROM users where id=$1`;
    const UPDATE_USERS = `UPDATE users set username = $1,email = $2,password = $3 where id=$4 RETURNING *`;
    return {
        INSERT_USERS, SELECT_USERS_LIST, SELECT_USERS_ID, SELECT_USERS_SEARCH, DELETE_USERS, UPDATE_USERS
    }
}

module.exports = dbQueryUsers