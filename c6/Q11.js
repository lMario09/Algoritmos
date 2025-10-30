export function q11cap6() {
    function jogoDeAdivinhacao() {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        let tentativas = 10;

        console.log("Adivinha um número aí bomzão.");

        while(tentativas > 0) {
            let numeroEscolhido = parseInt(prompt("Digita aí: "));
            if (isNaN(numeroEscolhido) || (numeroEscolhido < 1) || (numeroEscolhido > 100)) {
                console.log("Digita um número válido aí seu betinha.");
                continue;
            } else if (numeroEscolhido === numeroAleatorio) {
                console.log("Parabéns! Tu acertou, betinha.");
                break;
            } else if (numeroEscolhido < numeroAleatorio) {
                console.log("O número que tu digitou é MENOR que o número secreto, seu beta.");
            } else {
                console.log("O número que você digitou é MAIOR que o númeor secreto, seu beta.");
            }
            tentativas = tentativas - 1;
            console.log("Você ainda tem " + tentativas + " tentativas, betinha.");
        }
        if (tentativas === 0) {
            console.log("Tu foi mogado, seu betinha.");
            console.log("O número era: " + numeroAleatorio);
        }
    }

    jogoDeAdivinhacao()
}