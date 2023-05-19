const { pool } = require('../config/database')
const { readFileSync } = require('fs')

const unit1terms = require('../config/data/unit1.json')
const data = JSON.parse(JSON.stringify(unit1terms))

const createTableQuery = `
    DROP TABLE IF EXISTS unit1;

    CREATE TABLE unit1 (
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
        text: 'INSERT INTO unit1 (term, definition) VALUES ($1, $2)',
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
        const results = await pool.query('SELECT * FROM unit1 ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

module.exports = { getTerms }