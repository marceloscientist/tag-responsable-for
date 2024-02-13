import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
 


 
export class AppComponent {
  nome: string = '';
  trechoBiblico: string = '';
  tags: string[] = [];
  paresGerados: { pessoa: string, trechoBiblico: string }[] = [];

  adicionarTag() {
    if (this.nome.trim() !== '' && this.trechoBiblico.trim() !== '') {
      this.tags.push(`${this.nome} - ${this.trechoBiblico}`);
      this.nome = '';
      this.trechoBiblico = '';
    }
  }

  gerarPares() {
    if (this.tags.length >= 2) {
      const pessoas: string[] = [];
      const trechosBiblicos: string[] = [];

      this.tags.forEach(tag => {
        const [nome, trecho] = tag.split(' - ');
        pessoas.push(nome);
        trechosBiblicos.push(trecho);
      });

      const pares: { pessoa: string, trechoBiblico: string }[] = [];

      while (pessoas.length > 0 && trechosBiblicos.length > 0) {
        const randomPessoaIndex = Math.floor(Math.random() * pessoas.length);
        const randomTrechoIndex = Math.floor(Math.random() * trechosBiblicos.length);

        pares.push({
          pessoa: pessoas.splice(randomPessoaIndex, 1)[0],
          trechoBiblico: trechosBiblicos.splice(randomTrechoIndex, 1)[0]
        });
      }

      this.paresGerados = pares;
    } else {
      alert('Por favor, adicione pelo menos duas tags para gerar pares.');
    }
  }
}
