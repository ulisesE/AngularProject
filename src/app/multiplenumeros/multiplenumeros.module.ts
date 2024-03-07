import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { MultiplenumerosComponent } from './multiplenumeros.component';
import { MultiplenumerosRoutingModule } from './multiplenumeros-routing.module';
import { IngresarnumerosComponent } from '../ingresarnumeros/ingresarnumeros.component';
import { VernumeroComponent } from '../vernumero/vernumero.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MultiplenumerosRoutingModule, FormsModule],
  declarations: [MultiplenumerosComponent, IngresarnumerosComponent, VernumeroComponent],
})
export class MultiplenumerosModule {}
