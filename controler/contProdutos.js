const mysql = require('../mysql').pool;



exports.getProdutos = (req, res, next)=>{
    mysql.getConnection((erro, conn)=>{
 if(erro){return res.status(500).send({erro: erro})}
 conn.query('select * from produtos;',
 (erro, resultado, field)=>{
     if(erro){return res.status(500).send({erro: erro})}
 
     return res.status(200).send({produtos: resultado})
 })
    })
 }

 exports.postProdutos =  (req, res, next)=>{
    mysql.getConnection((erro, conn)=>{
    if(erro){return res.status(500).send({erro: erro})}
       conn.query(
        'INSERT INTO produtos (nome, descricao, preco, categoria) VALUES (?,?,?,?)',
        [req.body.nome, req.body.descricao, req.body.preco, req.body.categoria],
       (erro, resultado, field)=>{
        conn.release();
        if (erro){
            return res.status(500).send({
                erro: erro,
                produtos: null
            })}
        res.status(201).send({
            mensagem: 'Postado com sucesso',
           id_produto: resultado.insertId
       })})})}

exports.getIdProdutos = (req, res, next)=>{
        mysql.getConnection((erro, conn)=>{
            if(erro){return res.status(500).send({erro: erro})}
            conn.query('select * from produtos WHERE id = ?;',
            [req.params.id],
            (erro, resultado, field)=>{
                if(erro){return res.status(500).send({erro: erro})}
                return res.status(200).send({produtos: resultado})
            })})}


exports.editProdutos = (req, res, next)=>{
    mysql.getConnection((erro, conn)=>{
        if(erro){return res.status(500).send({erro: erro})}
           conn.query(
            'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, categoria = ? WHERE id = ?',
            [req.body.nome, req.body.descricao, req.body.preco,  req.body.categoria, req.body.id],
           (erro, resultado, field)=>{
            conn.release();
            if (erro){
                return res.status(500).send({
                    erro: erro,
                    produtos: null
                })
            }
            res.status(202).send({
                mensagem: 'Alterado com sucesso',

           }) }) })
        }

exports.deleteProdutos =  (req, res, next)=>{
    mysql.getConnection((erro, conn)=>{
        if(erro){return res.status(500).send({erro: erro})}
           conn.query(
            'DELETE FROM produtos WHERE id = ?',
            [req.body.id],
           (erro, resultado, field)=>{
            conn.release();
            if (erro){
                return res.status(500).send({
                    erro: erro,
                    produtos: null
                })
            }
            res.status(202).send({
                mensagem: 'Removido com sucesso',

           }) }) })
        }        