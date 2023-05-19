const { pool } = require('../config/database')
const { readFileSync } = require('fs')

const unit6terms = require('../config/data/unit6.json')
const data = JSON.parse(JSON.stringify(unit6terms))

const createTableQuery = `
    DROP TABLE IF EXISTS unit6;

    CREATE TABLE unit6 (
        id SERIAL PRIMARY KEY,
        term VARCHAR(255) NOT NULL,
        definition VARCHAR(255) NOT NULL
    );
`

pool.query(createTableQuery, (error, res) => {
    if (error) {
        console.log(error)
        return
    }

    console.log('Table created successfully!')
})


data.forEach((item) => {
    const { term, definition } = item
    const query = {
        text: 'INSERT INTO unit6 (term, definition) VALUES ($1, $2)',
        values: [term, definition]
    }

    pool.query(query, (error, res) => {
        if (error) {
            console.log(error)
            return
        }

        console.log(`${term} added to database!`)
    })
})

const getTerms = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM unit6 ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

module.exports = { getTerms }