const AuthenticationService = (userService) => {
    const {findUserByUsernamePassword} = userService
    const login = async (payload) => {
        const user = await findUserByUsernamePassword(
            payload.username,
            payload.password
        )
        if (!user) return 'Invalid Account!'
        // Token
        return `Enigma`
    }

    const logout = () => {}
    const forgotPassword = () => {}

    return {
        login
    }
}

module.exports = AuthenticationService