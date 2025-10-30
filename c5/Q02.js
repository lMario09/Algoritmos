export function q2cap5() {
    let a1 = prompt("Digite o primeiro número: ");
    let a2 = prompt("Digite o segundo número: ");
    let a3 = prompt("Digite o terceiro número: ");

    if ((a1 > a2) & (a1 > a3)) {
        console.log(a1);
    } else if ((a2 > a1) & (a2 > a3)) {
        console.log(a2);
    }
    else {
        console.log(a3);
    }
}