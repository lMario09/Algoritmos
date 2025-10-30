export function q12cap6() {
    function somaDaCalculadora() {
        let numero1Soma = parseFloat(prompt("Digite o primeiro número: "));
        let numero2Soma = parseFloat(prompt("Digite o segundo número: "));
        console.log(numero1Soma + numero2Soma);
    }
    function subtracaoDaCalculadora() {
        let numero1Subtracao = parseFloat(prompt("Digite o primeiro número: "));
        let numero2Subtracao = parseFloat(prompt("Digite o primeiro número: "));
        console.log(numero1Subtracao - numero2Subtracao);
    }
    function multiplicacaoDaCalculadora() {
        let numero1Multiplicacao = parseFloat(prompt("Digite o primeiro número: "));
        let numero2Multiplicacao = parseFloat(prompt("Digite o primeiro número: "));
        console.log(numero1Multiplicacao * numero2Multiplicacao);
    }
    function divisaoDaCalculadora() {
        let numero1Divisao = parseFloat(prompt("Digite o primeiro número: "));
        let numero2Divisao = parseFloat(prompt("Digite o primeiro número: "));
        console.log(numero1Divisao / numero2Divisao);
    }
    console.log("Olá betinha, seja bem-vindo a essa calculadora bem restrita.")
    let escolha = prompt("Digite o número que corresponde à operação que você deseja: \n 1 -Adição \n 2 -Subtração \n 3 -Multiplicação \n 4 -Divisão")
    switch (escolha) {
        case "1": somaDaCalculadora();
        break;
        case "2": subtracaoDaCalculadora();
        break;
        case "3": multiplicacaoDaCalculadora();
        break;
        case "4": divisaoDaCalculadora();
    }
}