const Response = require('../../utils/response');

const UsersController = () => {
    const createUsers = async (req, res) => {
        try {
            const payload = req.body;
            const newUsers = await  req.serviceUsers.registerUsers(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUsers));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listUsers = async (req, res) => {
        try {
            const keyword = req.query.q
            const users = await req.serviceUsers.findAllUsers(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', users));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getUsers = async (req, res) => {
        const id = req.params.id
        const users = await req.serviceUsers.findUsersById(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', users));
    }

    const updateUsers = async (req, res) => {
        const payload = req.body;
        const newUsers = await req.serviceUsers.updateUser(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUsers));
    }

    const deleteUsers = async (req, res) => {
        const id = req.params.id
        const users = await req.serviceUsers.removeUsers(id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', users));
    }

    return {
        createUsers, listUsers, getUsers, updateUsers, deleteUsers
    }
}

module.exports = UsersController;