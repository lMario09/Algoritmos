export function q10cap6() {
    function solicitarDoisNumerosAoUsuario() {
        let a = parseFloat(prompt("Digite um número: "));
        let b = parseFloat(prompt("Digite um número: "));
        let media = (a + b)/2
        return console.log(media)
    }
    solicitarDoisNumerosAoUsuario()
}