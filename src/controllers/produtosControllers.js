const connection = require("../models/connection")

function rotaPrincipal(req, res){
    return res.send("Rota principal");
}

async function insertProduto(req, res){
    const { nome, preco, categoria } = req.body;

    try {
        const produto = await connection.query(`
            INSERT INTO produtos (nome, preco, categoria)
            values ('${nome}', ${preco}, '${categoria}')
            returning *
        `)
    
        return res.status(201).json(produto.rows[0]);
    } catch (error){
        console.error("Erro ao inserir produto:", error);
        return res.status(500).json({ error: "Erro ao inserir produto" });
    }
}

module.exports = {
    rotaPrincipal,
    insertProduto
}