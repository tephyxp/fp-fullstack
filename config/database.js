require("dotenv").config()
const mysql =require("mysql2")

const host = process.env.DB_HOST

const user = process.env.DB_USER

const pass = process.env.DB_PASS

const name = process.env.DB_NAME


const pool = mysql.createPool({
    host: host,
    user: user,
    password: pass,
    database: name
})

module.exports = pool.promise();