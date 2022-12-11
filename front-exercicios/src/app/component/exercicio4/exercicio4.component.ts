import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component {
  numero: number = 10;

  resultado?: string;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {

  }

  somarMultiplos(){
    this.apiService.getSomarMultiplos(this.numero).subscribe((resultado: any) => {
        this.resultado = resultado;
    })
  }
}
