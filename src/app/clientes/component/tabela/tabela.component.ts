import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Cliente } from 'src/app/clientes/interface/cliente';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements AfterViewInit{

  @Output() linhaTabela     = new EventEmitter<Cliente>();
  @Output() geraLinkCob     = new EventEmitter<Cliente>();
  @Output() consultaLinkCob = new EventEmitter<Cliente>();
  @Output() pixCobranca     = new EventEmitter<Cliente>();
  @Output() paginacao       = new EventEmitter<MatPaginator>();

  @Input() dataSource: Cliente[] = [];
  @Input() recordLength: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sortColumns: MatSort = <MatSort>{};

  public colunas:  string[]  = [];

  private displayedColumns = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(

    map(({ matches }) => {

      if (matches) {
        return [ 'pedido', 'cliente', 'vendedor', 'valor', 'action'];
      }

      return ['pedido', 'cliente', 'vendedor', 'valor', 'link', 'qrcode', 'pix', 'txid', 'action'];

    })

  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.displayedColumns.subscribe(
      resp => this.colunas = resp
    );

  };

  ngAfterViewInit(): void {

    this.paginator.page.pipe(
      tap( () => this.paginacao.emit( this.paginator ) )
    ).subscribe();

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

  geraPixCobranca( cliente: Cliente ) {

    this.pixCobranca.emit( cliente );

  };

};
