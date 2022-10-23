import { Component, Input, OnInit } from '@angular/core';

import { Cliente } from 'src/app/clientes/interface/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  @Input() dataSource: Cliente = <Cliente>{};

  public cliente: Cliente = <Cliente>{};

  constructor() { };

  ngOnInit(): void {

    this.cliente = this.dataSource;

  };

};
