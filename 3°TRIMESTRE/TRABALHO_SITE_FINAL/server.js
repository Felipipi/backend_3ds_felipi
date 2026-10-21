import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname
// Usar Middiware (Sofware guardião)
app.use(express.static(path.join(baseDir, 'src/publico')))

app.get('/', (req, res) => {
    res.sendFile('src/paginas/index.html', {root: baseDir})
})
app.get('/contratos', (req, res) => {
    res.sendFile('src/paginas/contratos.html', {root: baseDir})
})
app.get('/suporte', (req, res) => {
    res.sendFile('src/paginas/suporte.html', {root: baseDir})
})
app.get('/sobre', (req, res) => {
    res.sendFile('src/paginas/sobre.html', {root: baseDir})
})
app.listen(PORT, () => { console.log('Servidor Ok na porta' + PORT)})