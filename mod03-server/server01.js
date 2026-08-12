const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const porta = 8081

const home = path.join(__dirname, 'pages/home.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const erro = path.join(__dirname, 'pages/404.html')

const server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`) //http://localhost
    const caminhoUrl = novaUrl.pathname

    if(caminhoUrl === '/'){
        res.statusCode = '201'
       //res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(home, 'utf-8')) //chamar o html
    }
      if(caminhoUrl === '/sobre'){
        res.statusCode = '201'
       //res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(sobre, 'utf-8')) //chamar o html
    } 
          if(caminhoUrl === '/404'){
        res.statusCode = '404'
        //res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(erro, 'utf-8')) //chamar o html
    } 
    else {
        res.statusCode = '401'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h3>pinto loco</h3>')
    }
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta 
        http://localhost:${porta}`)
})