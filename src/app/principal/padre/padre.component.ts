import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  constructor() {}

  nombre: string = '';
  dni: string = '';
  estado: string = '';

  data: any;

  registrar() {
    this.data = {
      nombre: this.nombre,
      dni: this.dni,
      estado: this.estado,
    };
  }
}
