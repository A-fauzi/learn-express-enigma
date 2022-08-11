const RoutesUsers = () => {
    const ERROR_PATH = '/error'
    const POST_USERS = '/users'
    const PUT_USERS = '/users/:id'
    const GET_USERS_LIST = '/users'
    const GET_USERS = '/users/:id'
    const DELETE_USERS = '/users/:id'

    return {
        ERROR_PATH, POST_USERS, PUT_USERS,GET_USERS, GET_USERS_LIST, DELETE_USERS
    }
}

module.exports = RoutesUsers