import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FundamentosAngular';

  nome = 'Thiago';

  adicionar() {

    const numero = Math.round(Math.random() * 100);
    this.nome = 'João ' + numero;
  }


}
