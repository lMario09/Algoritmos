import Comentario from "./Comentario.js";

class Publicacao {
  constructor(usuario, descricao, midia) {
    this.usuario = usuario;
    this.dataPublicacao = new Date();
    this.descricao = descricao;
    this.midia = midia;
    this.curtidas = 0;
    this.comentarios = [];
  }

  editar(novoTexto, novaMidia) {}

  remover() {}

  curtir() {
    this.curtidas++;
  }

  descurtir() {}

  comentar(texto) {
    const novoComentario = new Comentario(this.usuario, texto);
    this.comentarios.push(novoComentario);
  }
}

export default Publicacao;