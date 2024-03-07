import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { MultiplenumerosComponent } from './multiplenumeros.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'multiplenumeros', component: MultiplenumerosComponent, data: { title: marker('Numeros') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MultiplenumerosRoutingModule {}
