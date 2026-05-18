//módulos default/padrão devem estar sozinhos
//ao importarmos, dispensamos {}

const config = function() {
    return {
        online: true,
        live: true,
        health: 100,
    }
}
export default config; //; é opcional