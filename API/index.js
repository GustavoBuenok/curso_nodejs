import express from "express";

const app = express();

//serviço = API 

//rota que o cliente ira solicitar
app.get("/", (req, res) => {
    res.send("Primeiro dia com NODE")

})

app.listen(3000, ()=>{
    console.log("Iniciando minha API com o EXPRESS")
})