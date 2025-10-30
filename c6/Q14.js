export function q14cap6() {
    function calculadoraDeIMC() {
        let altura = parseFloat(prompt("Insira sua altura: "));
        let peso = parseFloat(prompt("Insira o seu peso: "));
        let imc = peso / (altura ** 2);

    if (imc < 18.5) {
        console.log(`Você está magrelo e sem moral. Seu IMC é ${imc.toFixed(2)}.`);
    } else if ((imc >= 18.5) && (imc <= 24.9)) {
        console.log(`Você está normal, perante os padrõ impostos pela sociedade. Seu IMC é ${imc.toFixed(2)}.`);
    } else if ((imc >= 25) && (imc<= 29.9)) {
        console.log(`Você está gordinho. Seu IMC é ${imc.toFixed(2)}.`);
    }
    else {
        console.log(`Você está obeso paizão, vamo melhorar isso aí. Seu IMC é ${imc.toFixed(2)}.`);
    }
    }
    calculadoraDeIMC()
}