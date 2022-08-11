const express = require('express');
const router = express.Router();
const UsersRoute = (usersController) => {
    const {createUsers, listUsers, getUsers, updateUsers, deleteUsers} = usersController();
    router.post('/', createUsers);
    router.get('/', listUsers);
    router.get('/:id', getUsers);
    router.put('/', updateUsers);
    router.delete('/:id', deleteUsers);
    return router;
}
module.exports = UsersRoute;