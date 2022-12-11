import { ApiService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  numero: number = 5;

  resultado?: string;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {

  }

  calcularFatorial(){
    this.apiService.getCalcularFatorial(this.numero).subscribe((resultado: any) => {
        this.resultado = resultado;
    })
  }
}
