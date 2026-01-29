import Comentario from "../../c9/Q01/Comentario";
import Usuario from "../../c9/Q01/Usuario";
import Publicacao from "../../c9/Q01/Publicacao";

describe('Testando a classe Comentario', () => {
  let usuario1;
  let usuario2;

  beforeEach(() => {
    usuario1 = new Usuario("José Pereira", "20/02/1993");
    usuario2 = new Usuario("Luis Mário", "24/07/2008");
  })

    test('Teste para editar comentario', () => {
      usuario1.criarPublicacao("Hello")
      usuario1.publicacoes[0].comentar("Hey man");
      usuario1.publicacoes[0].comentarios[0].editar("Ops");

});
});