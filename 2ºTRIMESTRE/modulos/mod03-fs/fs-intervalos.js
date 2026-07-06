//Executa uma unica vez após determinado tempo (ms)
setTimeout(() => {
    console.log('Era uma vez...')
}, 3000)

//Executa infinitamente após determinado tempo (ms)
setInterval((arquivo) => {
    console.log('Executando callback do setInterval')
}, 1)
