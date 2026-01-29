import {
  somar2numeros,
  subtrair2numeros,
  multiplicar2numeros,
} from "../operacoes-modulo.js";
import { describe, expect, test } from "bun:test";
import criarPublicacao from "../../c9/Q01/Usuario.js";
import Publicacao from "../../c9/Q01/Publicacao.js";
import Comentario from "../../c9/Q01/Comentario.js";

describe("Teste para a função somar", () => {
  test("Dois números positivos", () => {
    expect(somar2numeros(2, 3)).toBe(5);
  });

  test("Um número positivo e um negativo", () => {
    expect(somar2numeros(5, -3)).toBe(2);
  });

  test("Um numero positivo e uma string", () => {
    expect(somar2numeros(6, "oi")).toBe(undefined)
  })

});

describe('Testes para a função subtrair', () => {
  test('Dois números positivos', () => {
    expect(subtrair2numeros(7, 3)).toBe(4);
    expect(subtrair2numeros(3, 7)).toBe(-4);
  })

  test('Um número positivo e um negativo', () => {
    expect(subtrair2numeros(8, -4)).toBe(12);
    expect(subtrair2numeros(-4, 8)).toBe(-12);
  })
  
  test('Um número positivo e uma string', () => {
    expect(subtrair2numeros(8, "Eita")).toBe(undefined);
  })
  
});


