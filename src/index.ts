import Express = require("express")

const app = Express()
const porta = 8080

app.get("/", (req,res)=>{
    res.send("<h1>olá mundo</h1>")
})

app.get("/variavel", (req,res)=>{
    let v = "adeus"
    res.send(v);
})

app.get("/variavelNumerica", (req,res)=>{
    let v = "1758"
    res.json(v);
})

app.get("/objeto", (req,res)=>{
    let obj = {nome: "maria", idade:54}
    res.send(obj) // obj sera enviado como json
})

app.get("/arrayDeobjetos", (req,res)=>{
    const objs = [
        {modelo:"Gol", ano:1988},
        {modelo:"Uno", ano:2005},
        {modelo:"Celta", ano:2010}
    ];
    res.send(objs);
})
app.listen(porta, ()=>{
    console.log("Servidor rodando")
})


