import Publicacao from "./Publicacao.js";

class Usuario {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.seguidores = [];
        this.seguindo = [];
        this.publicacoes = [];
    }

    criarPublicacao(texto, midia) {
        const novaPublicacao = new Publicacao(this, texto, midia);
        this.publicacoes.push(novaPublicacao);
    }

    seguirUsuario(usuario) {
        this.seguindo.push(usuario);
        usuario.seguidores.push(this);
    }

    deixarDeSeguirUsuario(usuario) {
        
    }
}

export default Usuario;