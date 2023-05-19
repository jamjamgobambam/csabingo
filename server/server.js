const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

const router = require('./routes/routes')

app.use(express.json())
app.use('/terms', router)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})