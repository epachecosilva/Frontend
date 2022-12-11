import { ApiService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2component.css']
})
export class Exercicio2Component implements OnInit {

  vetor: string = "5,3,2,4,7,1,0,6";

  resultado?: string;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {

  }
  ordenarVetor(){
      this.apiService.getOrdenarVetor(this.vetor).subscribe((resultado: any) => {
          this.resultado = resultado;
      })
    }
}
