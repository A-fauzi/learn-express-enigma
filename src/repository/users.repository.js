const bcrypt = require('bcryptjs')
const dbQueryUsers = require('../config/users/db.query.users');
const UsersDto = require('../model/users/users.dto');
const UsersRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(
                dbQueryUsers().INSERT_USERS,
                [
                    payload.username,
                    payload.email,
                   bcrypt.hashSync(payload.password, 8),
                ]);
            return UsersDto(result);
        } catch (err) {
            return err.message
        }
    }

    const list = async (keyword) => {
        try {
            const users = [];
            if (keyword) {
                const result = await db.query(dbQueryUsers().SELECT_USERS_SEARCH, [`%${keyword}%`]);
                for (let i = 0; i < result.rows.length; i++) {
                    users.push(UsersDto(result, i));
                }
                return users
            }
            const result = await db.query(dbQueryUsers().SELECT_USERS_LIST);
            for (let i = 0; i < result.rows.length; i++) {
                users.push(UsersDto(result, i));
            }
            return users;
        } catch (err) {
            return err.message
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(dbQueryUsers().SELECT_USERS_ID, [id]);
            if (result.rowCount > 0) return UsersDto(result);
        } catch (err) {
            return err.message
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return `User with value ID ${payload.id} not found!`;
            const result = await db.query(
                dbQueryUsers().UPDATE_USERS,  [
                    payload.username,
                    payload.email,
                    bcrypt.hashSync(payload.password, 8),
                    payload.id
                ]);
            return UsersDto(result);
        } catch (err) {
            return err.message
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return `User with value ID ${id} not found!`;
            await db.query(dbQueryUsers().DELETE_USERS, [id]);
            return `User with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list, getById, update, remove
    }
}

module.exports = UsersRepository;