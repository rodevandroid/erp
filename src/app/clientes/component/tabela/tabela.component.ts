import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Cliente } from 'src/app/clientes/interface/cliente';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements OnInit {

  @Output() linhaTabela =  new EventEmitter<Cliente>();
  @Input() dataSource: Cliente[] = [];

  public clientes: Cliente[] = [];
  public displayedColumns    = ['position', 'name', 'weight', 'symbol'];

  constructor() { };

  ngOnInit(): void {

    setTimeout( ( ) => {
      this.clientes = this.dataSource;
    }, 300);

  };

  setLine( row: Cliente ) {

    this.linhaTabela.emit( row );
    console.log('Tabela Linha: ', row);

  };

};
