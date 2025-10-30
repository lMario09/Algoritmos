export function q13cap5() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 10;

    console.log("Seja muito bem-vindo a esse joguinho muito legal :D")
    console.log("Seu objetivo é adivinhar o número secreto entre 1 e 100.");
    console.log("Você tem 10 tentativas. Boa sorte, você vai precisar. HAHAHA");

    while (tentativas > 0) {
        let palpite = parseInt(prompt("Digite um número entre 1 e 100:"));
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Número inválido. Por favor, digite um número válido entre 1 e 100.");
            continue
        }
        if (palpite === numeroSecreto) {
            console.log("PARABÉNS!!! Você acertou! O número era " + numeroSecreto);
            break
        } else if (palpite < numeroSecreto) {
            console.log("O número secreto é MAIOR que o número que você digitou.");
        }
        else {
            console.log("O número secreto é MENOR que o número que você digitou")
        }
        tentativas = tentativas - 1;
        console.log("Você ainda tem " + tentativas + " tentativas.");
    }
    if (tentativas === 0) {
        console.log("Suas tentativas acabaram, SEU LIXO! HAHAHAHAHA");
        console.log("O número secreto era " + numeroSecreto);
    }
    console.log("Fim de jogo. Obrigado por jogar!");
}