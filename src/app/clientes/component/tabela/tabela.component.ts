import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/clientes/interface/cliente';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent  {

  @Output() linhaTabela     =  new EventEmitter<Cliente>();
  @Output() geraLinkCob     =  new EventEmitter<Cliente>();
  @Output() consultaLinkCob =  new EventEmitter<Cliente>();

  @Input() dataSource: Cliente[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sortColumns: MatSort = <MatSort>{};

  public colunas:  string[]  = [];

  public page = 1;
  public limit = 10;
  public itens: number[] = [20, 40, 60];

  private displayedColumns = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(

    map(({ matches }) => {

      if (matches) {
        return [ 'pedido', 'cliente', 'vendedor', 'valor', 'action'];
      }

      return ['pedido', 'cliente', 'vendedor', 'valor', 'link', 'action'];

    })

  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.displayedColumns.subscribe(
      resp => this.colunas = resp
    );

  };

  setLine( row: Cliente ) {

    this.linhaTabela.emit( row );

  };

  gerarLink( cliente: Cliente ) {

    this.geraLinkCob.emit( cliente );

  };

  consultarLink( cliente: Cliente ) {

    this.consultaLinkCob.emit( cliente );

  };

  onChangePage($event: PageEvent) {

    this.limit = $event.pageSize;
    this.page  = $event.pageIndex + 1;

  };

};
