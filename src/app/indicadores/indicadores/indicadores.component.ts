import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { IndicadorService } from './../service/indicador.service';


@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})

export class IndicadoresComponent implements OnInit {

  public previsaoReceita = 0;

  private service = new IndicadorService();

  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(

    map(({ matches }) => {

      if (matches) {
        return [
          { title: 'Total de Vendas',   cols: 1, rows: 1, dados: this.getTotalVendas() },
          { title: 'Comissões',         cols: 1, rows: 1, dados: this.getComissoes() },
          { title: 'Boletos em Atrazo', cols: 1, rows: 1, dados: this.getBoletosAtrazo() },
          { title: 'Boletos a Receber', cols: 1, rows: 1, dados: this.getBoletosReceber() }
        ];
      }

      return [
        { title: 'Total de Vendas',   cols: 2, rows: 1, dados: this.getTotalVendas() },
        { title: 'Comissões',         cols: 1, rows: 1, dados: this.getComissoes() },
        { title: 'Boletos em Atrazo', cols: 1, rows: 2, dados: this.getBoletosAtrazo() },
        { title: 'Boletos a Receber', cols: 1, rows: 1, dados: this.getBoletosReceber() }
      ];

    })

  );

  constructor(
    private breakpointObserver: BreakpointObserver, private router: Router, private _snackBar: MatSnackBar
  ) { };

  ngOnInit() {

    this.previsaoReceber();

  };

  private previsaoReceber () {

    this.service.getBoletosAtrazo().then( atrazados => {

      return atrazados;

    }).then( atrazados => {

      return this.getBoletosReceber().then( receber => {

        return {atrazados, receber};

      });

    }).then( previsao => {

      this.previsaoReceita = <number>previsao.atrazados + <number>previsao.receber;

    }).catch( err => {

      alert('nao foi possivel calcular a receita');

    });

  };

  public atualizar() {

    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

  };

  private getTotalVendas() {

    return this.service.getTotalVendas().then( total => {

      return total;

    });

  };

  private getComissoes() {

    return this.service.getComissoes().then( total => {

      return total;

    });

  };

  private getBoletosAtrazo() {

    return this.service.getBoletosAtrazo().then( (total) => {

      return total;

    });

  };

  private getBoletosReceber() {

    return this.service.getBoletosReceber().then( (total) => {

      return total;

    });

  };

  private async getReceitaLiquida() {

    return this.service.getTotalVendas().then( (total) => {

      return total;

    }).then( vendas => {

      return this.service.getBoletosAtrazo().then( atrazados => {

        return { vendas, atrazados };

      });

    }).then( atrazados => {

      return this.service.getComissoes().then( comissao => {

        return {
          vendas: atrazados.vendas,
          atrazados: atrazados.atrazados,
          comissao: comissao
        };

      });

    }).then( movimento => {

      return <number>movimento.vendas - ( <number>movimento.comissao + <number>movimento.atrazados );

    }).catch( error => {

      this._snackBar.open(error.message, 'Fechar');

    });

  };

};
