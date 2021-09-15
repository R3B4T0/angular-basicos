import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string [] = ['Spiderman', 'Batman', 'Superman', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando...');
    //this.heroes.splice(this.heroes.length - 1);
    this.heroeBorrado = this.heroes.shift() || '';
  }

  ngOnInit() { }

}
