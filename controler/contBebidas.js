const mysql = require('../mysql').pool;

//Filtra produtos por categoria B de bebidas

exports.getBebidas =  (req, res, next)=>{
    mysql.getConnection((erro, conn)=>{
 if(erro){return res.status(500).send({erro: erro})}
 conn.query('select id, nome, descricao, preco from produtos WHERE categoria = "B"',
 (erro, resultado, field)=>{
     if(erro){return res.status(500).send({erro: erro})}
 
     return res.status(200).send({produtos: resultado})
 })
    })
 }

 exports.getIdBebidas = (req, res, next)=>{
    mysql.getConnection((erro, conn)=>{
        if(erro){return res.status(500).send({erro: erro})}
        conn.query('select * from produtos WHERE id = ?;',
        [req.params.id],
        (erro, resultado, field)=>{
            if(erro){return res.status(500).send({erro: erro})}
            return res.status(200).send({produtos: resultado})
        })
           })
        }