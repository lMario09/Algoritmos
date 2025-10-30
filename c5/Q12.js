export function q12cap5() {
    let f = parseInt(prompt("Digite um número inteiro positivo:"));

    while (isNaN(f) || f < 0) {
        f = parseInt(prompt("Número inválido. Por favor, digite um número inteiro positivo:"));
    }

    let fatorial = 1;
    let fa = 1;

    while (fa <= f) {
        fatorial = fatorial * fa;
        fa++
    }

    console.log(`O fatorial de ${f} é ${fatorial}.`);
}