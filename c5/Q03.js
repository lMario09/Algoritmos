export function q3cap5() {
    let nota1 = parseFloat(prompt("Insira a primeira nota: "));
    let nota2 = parseFloat(prompt("Insira a segunda nota: "));
    let nota3 = parseFloat(prompt("Insira a terceira nota: "));
    let soma = nota1 + nota2 + nota3;
    let media = soma / 3;

    if (media >= 7) {
        console.log("PARABÉNS! Você foi aprovado!");
    }
    else {
        console.log("Que pena, você foi reprovado.");
    }
}