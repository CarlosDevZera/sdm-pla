const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

// Rota para criação de usuários
app.post("/usuarios", (req, res) => {
    const usuario = req.body; 
    usuarios.push(usuario);
    res.send({ message: "Usuário criado com sucesso!" });
});

// Rota para criar um pedido
app.post("/pedido", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({ message: "Pedido criado com sucesso!" });
});

// Rota para listar todos os dados
app.get("/dados", (req, res) => {
    res.send({ usuarios, pedidos });
});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 3000");
});
