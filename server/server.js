const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()
const PORT = process.env.PORT || 3000

const router = require('./routes/routes')

app.use(express.json())
app.use('/terms', router)

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'java.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'java.png')))
    app.use(express.static('public'))
}

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})