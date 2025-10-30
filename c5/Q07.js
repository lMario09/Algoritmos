export function q7cap5() {
    let angulo1 = parseFloat(prompt("Insira um ângulo de um triângulo: "));
    let angulo2 = parseFloat(prompt("Insira outro ângulo de um triângulo: "));
    let angulo3 = parseFloat(prompt("Insira só mais um ângulo de um triângulo: "));

    if (angulo1 + angulo2 > angulo3 && angulo1 + angulo3 > angulo2 && angulo2 + angulo3 > angulo1) {
        if (angulo1 === angulo2 && angulo2 === angulo3) {
            console.log("É um Triângulo Equilátero.");
        } else if (angulo1 === angulo2 || angulo1 === angulo3 || angulo2 === angulo3) {
            console.log("É um Triângulo Isósceles.");
        }
        else {
            console.log("É um Triângulo Escaleno.");
        }
    }
    else {
        console.log("É um Triângulo Inválido.");
    }
}