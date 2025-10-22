function q20Cap7() {
const pessoasLegais = [
    {nome: 'Luis', idade: 17 },
    {nome: 'Carlos', idade: 19 },
    {nome: 'Vitor', idade: 17 },
    {nome: 'Anthony', idade: 22 }
]
let pessoaMaiorQue18 = pessoasLegais.find((pessoa) => {
    return pessoa.idade >= 18;
});
console.log(pessoaMaiorQue18.nome);
}