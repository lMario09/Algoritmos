import Artista from "./Artista";
import Musica from "./Musica";
class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
    }
    adicionarMusica(titulo, artista) {
        const addMusica = new Musica(titulo, artista);
        this.musicas.push(addMusica);
    }
    removerMusica() {
        this.musicas.pop();
    }
    reproduzir() {

    }
    avancarMusica() {

    }
    voltarMusica() {

    }
}