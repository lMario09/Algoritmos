import Musica from "./Musica";
class Artista {
    constructor(nome) {
        this.nome = nome;
        this.foto = null;
        this.musicas = [];
    }
    listaDeMusicas() {
        return this.musicas;
    }
    adicionarMusica(titulo) {
        const novaMusica = new Musica(titulo, this);
        this.musicas.push(novaMusica);
    }
    removerMusica() {
        this.musicas.pop();
    }
}
export default Artista;