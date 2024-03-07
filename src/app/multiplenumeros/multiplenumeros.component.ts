import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-multiplenumeros',
  templateUrl: './multiplenumeros.component.html',
  styleUrls: ['./multiplenumeros.component.scss'],
})
export class MultiplenumerosComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit(): void {}
}
