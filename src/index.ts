const express = require("express")
const rotasBasicos = require("./routes/basico")
const rotasDiferentesRetornos = require("./routes/diferentesRetorno")

const app = express()
const porta = 8080

app.use(rotasBasicos)
app.use(rotasDiferentesRetornos)

app.listen(porta, () => {
    console.log("Servidor rodando")
})