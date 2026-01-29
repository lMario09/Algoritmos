import Publicacao from "../../c9/Q01/Publicacao";
import Usuario from "../../c9/Q01/Usuario";

describe('Testando a classe Publicacao', () => {
  let usuario1;
  let usuario2;

  beforeEach(() => {
    usuario1 = new Usuario("José Pereira", "20/02/1993");
    usuario2 = new Usuario("Luis Mário", "24/07/2008");
  })

   test('Teste para criarPublicacao', () => {
    expect(usuario1.publicacoes.length).toBe(0);

    usuario1.criarPublicacao("Hello Word!");
    usuario1.criarPublicacao("Esta é minha segunda publicação");

    expect(usuario1.publicacoes.length).toBe(2);
  })
  
  test('Teste para curtir', () => {
    usuario1.criarPublicacao("Hello");
    
    usuario1.publicacoes[0].curtir();

    expect(usuario1.publicacoes[0].curtidas).toBe(1);
  })

  test('Teste para comentar', () => {
    usuario1.criarPublicacao("Hello");
    
    usuario1.publicacoes[0].comentar("Muito Bom!");

    expect(usuario1.publicacoes[0].comentarios.length).toBe(1);
  })
  
})
