const AuthenticationController = () => {
    const loginAccount = async (req, res) => {
        const payload = req.body
        const token = await req.authService.login(payload)
        res.status(201).json({token : token})
    }

    return {loginAccount}
}

module.exports = AuthenticationController