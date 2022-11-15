import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { map } from 'rxjs/operators';

import { Cliente } from '../../interface/cliente';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-tabela-pedido',
  templateUrl: './tabela-pedido.component.html',
  styleUrls: ['./tabela-pedido.component.css']
})

export class TabelaPedidoComponent implements OnChanges {

  @Input() cliente!: Cliente;
  @Output() clienteData = new EventEmitter<Cliente>();

  public dataSource: Cliente[] = [];
  public colunas:  string[]  = [];

  constructor(private service: ClienteService, private breakpointObserver: BreakpointObserver) {

    this.displayedColumns.subscribe(
      resp => this.colunas = <string[]>resp
    );

  };

  private displayedColumns = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(

    map(({ matches }) => {

      if (matches) {
        return [ 'pedido', 'cliente', 'action'];
      }

      return ['pedido', 'cliente', 'vendedor', 'action'];

    })

  );

  ngOnChanges(): void {

    this.service.getClienteById( this.cliente.pedido ).then( resp => {

      this.dataSource = <Cliente[]>resp;
      console.table( this.dataSource );

    });

  };


  selecionaCliente( cliente: Cliente ): void {

    this.clienteData.emit( cliente );
    
  };

  sortData(sort: Sort): void {

    let sortedData = [];
    const data = this.dataSource.slice();

    if (!sort.active || sort.direction === '') {
      sortedData = data;
      return;
    };

    sortedData = <Cliente[]>data.sort((a: any, b: any) => {

      const isAsc = sort.direction === 'asc';

      return sort.active ? this.compare(a[sort.active], b[sort.active], isAsc) : 0;

    });

    this.dataSource = sortedData;

  };

  private compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  };

};
