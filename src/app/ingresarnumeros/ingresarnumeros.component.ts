import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';

@Component({
  selector: 'app-ingresarnumeros',
  templateUrl: './ingresarnumeros.component.html',
  styleUrls: ['./ingresarnumeros.component.scss'],
})
export class IngresarnumerosComponent implements OnInit {
  numeroUsuario!: number;
  constructor(private baseDatosService: BaseDatosService) {}

  ngOnInit(): void {}

  enviarNumero(): void {
    this.baseDatosService.procesarMultiplos(this.numeroUsuario);
  }
}
