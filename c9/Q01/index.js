import Usuario from "./usuario.js";

const usuario1 = new Usuario("Luis", new Date("2008-07-24"));
const usuario2 = new Usuario("Vegetti", new Date("1988-10-15"));

usuario2.seguirUsuario(usuario1);

usuario1.criarPublicacao("O Vegetti começou a me seguir!", null);

usuario1.publicacoes[0].curtir();

usuario1.publicacoes[0].comentar("Será que ele vai curtir??");

usuario2.seguindo[0].publicacoes[0].curtir();

console.log(usuario1.nome);
console.log(usuario2.nome);

console.log(usuario1.seguidores.length);
console.log(usuario2.seguidores.length);

console.log(usuario1.seguindo.length);
console.log(usuario2.seguindo.length);

console.log(usuario1.publicacoes);
console.log(usuario1.publicacoes[0].curtidas);
console.log(usuario1.publicacoes[0].comentarios);