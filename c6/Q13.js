export function q13cap6() {
    function conversorDeRealParaDolar() {
        let moedaReal = parseFloat(prompt("Digite o valor(em REAL) que você deseja converter: "));
        let moedaDolar = 0.18;
        let conversao = moedaReal*moedaDolar;
        console.log(conversao.toFixed(0));
    }
    conversorDeRealParaDolar()
}