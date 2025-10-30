export function q5cap5() {
    let escolha = prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit \n2 - Fahrenheit para Celsius");
    let temperatura = parseFloat(prompt("Digite uma temperatura: "));

    if (escolha === "1") {
        let fahrenheit = (temperatura * 9 / 5) + 32;
        console.log("A temperatura " + temperatura + "°C equivale a " + fahrenheit.toFixed(2) + "°F.");
    }
    else if (escolha === "2") {
        let celsius = (temperatura - 32) * 5 / 9;
        console.log("A temperatura " + temperatura + "°F equivale a " + celsius.toFixed(2) + "°C.");
    }
    else {
        console.log("Insira uma opção válida");
    }
}