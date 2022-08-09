const express = require('express')
const EmployeeRoute = require("./route/employeeRoute");

require("dotenv").config()

const Server = () => {
    const app = express()
    app.use(express.json())

    const run = () => {
        EmployeeRoute(app)
    }

    app.listen(process.env.PORT, () => {
        console.log(`app is running on http://localhost:${process.env.PORT}`)
    })
    return {
        run
    }
}
module.exports = Server