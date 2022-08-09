const express = require('express')
const app = express()
const port = 8000

// app.use(express.json()) harus di declare agar res.json() dapat digunakan
app.use(express.json())

app.get('/employee', (req, res) => {
    const reqName = req.query.name
    reqName ? res.json(`Get Employee ${reqName}`) : res.json('GET Home Page')
})

app.get('/employee/:id', (req, res) => {
    const id = req.params.id
    res.json({
        message: `GET Home Page by id ${id}`
    })
})

app.post('/employee', (req, res) => {
    const employee = req.body
    res.json({
        employee
    })
})
app.put('/employee/:id', (req, res) => {
    const id = req.params.id
    res.end(`PUT Employee id ${id}`)
})
app.delete('/employee/:id', (req, res) => {
    const id = req.params.id
    res.end(`Delete Employee id ${id}`)
})

app.listen(port, () => {
    console.log(`app running in port https://localhost:${port}`)
})