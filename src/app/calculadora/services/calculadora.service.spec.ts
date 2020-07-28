import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    let soma = service.calcular(1,4,CalculadoraService.SOMA)
    expect(soma).toEqual(5);
  });

  it('deve garantir que 4 - 1 = 3', () => {
    let subtracao = service.calcular(4,1,CalculadoraService.SUBITRACAO)
    expect(subtracao).toEqual(3);
  });

  it('deve garantir que 4 / 2 = 2', () => {
    let divisao = service.calcular(4,2,CalculadoraService.DIVISAO)
    expect(divisao).toEqual(2);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let multiplicacao = service.calcular(1,4,CalculadoraService.MULTIPLICACAO)
    expect(multiplicacao).toEqual(4);
  });

  it('deve garantir que retorne 0', () => {
    let erro = service.calcular(1,4,'%')
    expect(erro).toEqual(0);
  });

});
