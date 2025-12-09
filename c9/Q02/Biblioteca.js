import Livro from "./Livro";
import Usuario from "./Usuario";
class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
        this.usuarios = [];
    }

    cadastrarUsuario(nome, cadastro, email) {
        const novoUsuario = new Usuario(nome, cadastro, email);
        this.usuarios.push(novoUsuario);
    }

    cadastrarLivro(titulo, autor) {
        const novoLivro = new Livro(titulo, autor);
        this.livros.push(novoLivro);
    }
}
export default Biblioteca;