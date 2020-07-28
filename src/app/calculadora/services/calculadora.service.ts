import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = "+";
  static readonly SUBITRACAO: string = "-";
  static readonly DIVISAO: string = "/";
  static readonly MULTIPLICACAO: string = "*";
  constructor() { }

  calcular(num1:number, num2:number, operador:string): number{
    switch (operador) {
      case operador = CalculadoraService.SOMA:
          return num1 + num2;
        break;
      case operador = CalculadoraService.SUBITRACAO:
          return num1 - num2;
        break;
      case operador = CalculadoraService.DIVISAO:
          return num1 / num2;
        break;
      case operador = CalculadoraService.MULTIPLICACAO:
          return num1 * num2;
        break;
    
      default:
        return 0;
        break;
    }
  }
}
