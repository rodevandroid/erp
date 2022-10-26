import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
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
  public colunas:  string[]  = [];

  private displayedColumns = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(

    map(({ matches }) => {

      if (matches) {
        return [ 'weight', 'symbol'];
      }

      return ['position', 'name', 'weight', 'symbol'];

    })

  );

  constructor(
    private breakpointObserver: BreakpointObserver, private router: Router
  ) {

    this.displayedColumns.subscribe(
      resp => this.colunas = resp
    );

  };

  ngOnInit(): void {

    setTimeout( ( ) => {
      this.clientes = this.dataSource;
    }, 100);

  };

  setLine( row: Cliente ) {

    this.linhaTabela.emit( row );

  };

  private teste() {
    alert('teste');
    localStorage
  }

};
