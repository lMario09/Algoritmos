import Emprestimo from "./Emprestimo";

class Usuario {
    constructor(nome, cadastro, email) {
        this.cadastro = cadastro;
        this.nome = nome;
        this.email = email;
        this.emprestimosAtivos = [];
    }
    realizarEmprestimo(livro) {
        const novoEmprestimo = new Emprestimo(this, livro);
        this.emprestimosAtivos.push(novoEmprestimo);
    }
    devolverLivro() {
        const emprestimoEncerrado = this.emprestimosAtivos.pop();
    }
}
export default Usuario;