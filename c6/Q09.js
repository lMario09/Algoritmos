export function q9cap6() {
    const saudacaoArrow = () => {console.log("Salve salve rapaziada.")};
    const mediaTresNumerosArrow = (a, b, c) => {console.log((a + b + c) / 3)};
    const quadradoNumeroArrow = (a) => {console.log(a**2)};
    const testeEscopoArrow = () => {
        const variavelFuncao = 44 //variavel dentro da função
        console.log(pi); //funciona
        console.log(variavelFuncao); //funciona
    }
    const declararVariavelDentroDeUmBlocoArrow = () => {
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