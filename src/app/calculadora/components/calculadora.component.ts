import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1   : string;
  private numero2   : string;
  private operador  : string;
  private resultado : number;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(){
    this.numero1 = '0';
    this.numero2 = null;
    this.operador = null;
    this.resultado = null;
  }

  adicionarNumero(numero: string):void {
    if(this.operador === null){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }
    else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  concatenarNumero(numAtual:string, numConcat:string): string{
    if(numAtual === '0' || numAtual === null){
      numAtual = '';
    }
    if(numConcat === '.' && numAtual === ''){
      return '0.';
    }
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operador: string):void{
    if(this.operador === null){
      this.operador = operador;
      return;
    }

    if(this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operador
      );

      this.operador = operador;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;

    }
  }

  calcular():void{
    if(this.numero2 === null){
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operador
    );
  }

  get display(): string{
    if(this.resultado !== null){
      return this.resultado.toString();
    }

    if(this.numero2 !== null){
      return this.numero2;
    }

    return this.numero1;
  }

}
