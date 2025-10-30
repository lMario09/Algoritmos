export function q8cap5() {
    let opcao = prompt("Escolha o prato de sua preferência: \n1 -Pizza. \n2 -Hambúrguer. \n3 -Salada. \n4 -Macarrão.");
    switch (opcao) {
        case "1":
        console.log("Prato escolhido: Pizza. \nPreço do produto: R$ 45,00 \nDescrição: Quatro Estações. (Mussarela, calabresa, frango e milho)");
        break;
    case "2":
        console.log("Prato escolhido: Hambúrguer. \nPreço do produto: R$ 15,00 \nDescrição: 2 blends de carne, ovo, tomate, cebola, alface e molho picante.");
        break;
    case "3":
        console.log("Prato escolhido: Salada. \nPreço do produto: R$ 5,00 \nDescrição: Alface, tomate, pepino e limão.");
        break;
    case "4":
        console.log("Prato escolhido: Macarrão. \nPreço do produto: R$ 7,00 \nDescrição: Macarrão e molho de tomate.")
}
}