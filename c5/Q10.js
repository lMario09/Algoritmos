export function q10cap5() {
    let par = parseFloat(prompt("Digite um número positivo: "));

    while (isNaN(par) || par < 0) {
        par = parseFloat(prompt("Número inválido. Por favor, digite um número positivo: "));
    }

    let i = 0;

    console.log(`Números pares de 0 até ${par}:`);

    while (i <= par) {
        console.log(i);
        i += 2;
    }
}