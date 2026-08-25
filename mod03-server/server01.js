const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const porta = 8081

const inicio = path.join(__dirname, 'pages/inicio.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const erro = path.join(__dirname, 'pages/erro.html')
const css = path.join(__dirname, 'pages/public/estilo.css')
const image = path.join(__dirname, 'pages/public/images/carro.png')

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`) //http://localhost
    const caminhoUrl = novaUrl.pathname

    if(caminhoUrl === '/public/estilo.css'){
        res.statusCode = 200
        res.setHeader('Content-type', 'text/css')
        return res.end(fs.readFileSync(css))
    }

    if(caminhoUrl === '/images/carro.png'){
        res.statusCode = 200
        res.setHeader('Content-type', 'image/png')
        return res.end(fs.readFileSync(image))
    }

    if(caminhoUrl === '/' || caminhoUrl === '/inicio'){
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(inicio, 'utf-8'))
    }

      if(caminhoUrl === '/sobre'){
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    } 

    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(erro, 'utf-8'))
    }
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta 
        http://localhost:${porta}`)
})