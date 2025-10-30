export function q7cap6() {
    const pi = 3.14 //variavel global
    function testeEscopo() {
        const variavelFuncao = 44 //variavel dentro da função
        console.log(pi); //funciona
        console.log(variavelFuncao); //funciona
    }
    console.log(pi); //funciona
    console.log(variavelFuncao); //erro
}