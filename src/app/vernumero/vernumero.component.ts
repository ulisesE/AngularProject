import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../base-datos.service';
import { Numero } from '../numero';

@Component({
  selector: 'app-vernumero',
  templateUrl: './vernumero.component.html',
  styleUrls: ['./vernumero.component.scss'],
})
export class VernumeroComponent implements OnInit {
  numeroProcesado!: Numero;

  constructor(private baseDatosService: BaseDatosService) {}

  ngOnInit(): void {
    this.numeroProcesado = this.baseDatosService.getNumeroProcesado();
  }
}
