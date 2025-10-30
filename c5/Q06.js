export function q6cap5() {
   let numero1 = parseFloat(prompt("Insira um número: "));
    let numero2 = parseFloat(prompt("Insira outro número: "));

    if (numero1 % numero2 === 0) {
        console.log("Pelo menos um dos número é múltiplo do outro.");
    } else if (numero2 % numero1 === 0) {
        console.log("Pelo menos um dos números é múltiplo do outro.");
    }
    else {
        console.log("Nenhum dos números é múltiplo do outro.");
    } 
}