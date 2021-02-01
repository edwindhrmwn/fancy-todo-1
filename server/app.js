const express = require('express')
const router = require('./routes')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.send('hello app')
})

app.use(router)

app.listen(PORT, () => {
    console.log(`Connected on http://localhost:${PORT}`)
})