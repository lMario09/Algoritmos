export function q8cap6() {
    function declararVariavelDentroDeUmBloco(){
        let nome = true //declaro uma variavel para criar um bloco de código (if)
        if (true) {
            let variavel3 = false //declaro uma variavel dentro do bloco de código
            console.log(variavel3); //acesso a variavel dentro do bloco (Deu certo)
        } else {
            console.log(nome);
        }
        console.log(variavel3) //acesso novamente a variavel, porém dessa vez fora do bloco de código (Deu erro)
    }
}