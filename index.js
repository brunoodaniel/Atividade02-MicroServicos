const express = require("express")
const app = express()
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config()

connectDB()

app.use(express.json())

const produtosRoutes = require("./routes/produtos")
app.use("/produtos", produtosRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
