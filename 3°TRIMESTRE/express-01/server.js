import express from 'express';

const PORT = 3000
const app = express()

app.get('/', (req, res) => {  //callback ou retorno
    res.send('<h3>Hello Pet!</h3>')   
})
app.get('/servicos', (req, res) => {
    res.send('<h3>Serviços Pet!</h3>')   
})
app.get('/produtos', (req, res) => {
    res.send('<h3>Produtos Pet!</h3>')   
})



app.listen(PORT, () => { console.log('Servidor Vivo!')})