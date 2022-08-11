const AuthenticationService = (userService) => {
    const {findByUsernamePassword} = userService
    const login = async (payload) => {
        const user = await findByUsernamePassword(
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