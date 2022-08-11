const UsersService = (userRepository) => {
    const {  create, list, getById, update, remove } = userRepository;
    const registerUsers = async (newUser) => {
        try {
            return await create(newUser);
        } catch (err) {
            return err.message
        }
    }
    const findAllUsers = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message
        }
    }
    const findUsersById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }
    const updateUser = async (newUser) => {
        try {
            return await update(newUser);
        } catch (err) {
            return err.message
        }
    }
    const removeUsers = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message
        }
    }
    return {
        registerUsers, findAllUsers, findUsersById, updateUser, removeUsers
    }
}

module.exports = UsersService;