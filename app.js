require("dotenv").config()
const express = require ("express")
const cors = require ("cors")
const db = require("./config/database")

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 2018
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})

app.use("/api",
require("./routes/productRoutes"))

app.get("/", (req, res)=> {
    res.status(200).send("<h1>Final project Fullstack</h1>")
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

// const mysql = require("mysql2");

// const db = mysql.createConnection({
//     host: "local host", // Reemplaza con el nombre de host correcto
//     user: "root",
//     password: "passroot",
//     database: "cosmetic_products",
// });
