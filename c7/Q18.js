function q18Cap7() {
const carrosLegais = [
    {nome: 'fusca', ano: 1995},
    {nome: 'Gol', ano: 2010},
    {nome: 'Corolla', ano: 2015}
];
let carrosFabricados2010 = carrosLegais.filter((carro) => {
    if (carro.ano > 2010) {
        console.log(carro.nome)
    }});
}