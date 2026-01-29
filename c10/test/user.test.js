import Usuario from "../../c9/Q01/Usuario";

describe('Teste para a classe Usuario', () => {
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
  
  test('Teste para seguirUsuario', () => {
    expect(usuario1.seguidores.length).toBe(0);
    expect(usuario1.seguindo.length).toBe(0);

    usuario1.seguirUsuario(usuario2);

    expect(usuario1.seguindo).toContain(usuario2);
    expect(usuario2.seguidores).toContain(usuario1);
  })
})
