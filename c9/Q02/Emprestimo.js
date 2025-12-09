class Emprestimo {
    constructor(livro, usuario) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = new Date();
    }
}
export default Emprestimo;