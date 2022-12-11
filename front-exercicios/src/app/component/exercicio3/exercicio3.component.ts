import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component {
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
