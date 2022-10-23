import { Cliente } from 'src/app/clientes/interface/cliente';

export class HttpLocal {

  private dsCliente: Cliente[] = [];
  private totalVendas: number = 0;
  private comissoes: number = 0;
  private botetoAtrazado: number = 0;
  private botetoReceber: number = 0;

  constructor() { };

  /**
   * @description simula chamada http a uma api
   * @returns retorna uma lista de clientes do tipo cliente
   */
  public getCliente() {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.dsCliente = [
            {id: 0, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
            {id: 1, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
            {id: 2, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
            {id: 3, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
            {id: 4, position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
            {id: 5, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
            {id: 6, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
            {id: 7, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
          ];

          resolve( <Cliente[]>this.dsCliente );

        }, 0);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getClienteById( id: number ) {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.dsCliente = [
            {id: 0, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
            {id: 1, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
            {id: 2, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
            {id: 3, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
            {id: 4, position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
            {id: 5, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
            {id: 6, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
            {id: 7, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
          ].filter( item => item.id == id );

          resolve( <Cliente[]>this.dsCliente );

        }, 0);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getTotalVendas( time: number = 1000 ) {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.totalVendas = 1520325;

          resolve( this.totalVendas );

        }, time);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getComissoes( time: number = 2000 ) {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.comissoes = 30000;

          resolve( this.comissoes );

        }, time);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getBoletosAtrazo( time: number = 3000 ) {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.botetoAtrazado = 120000;

          resolve( this.botetoAtrazado );

        }, time);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getBoletosReceber(time: number = 4000) {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.botetoReceber = 250000;

          resolve( this.botetoReceber );

        }, time);

      } catch (error) {

        reject( error );

      };

    });

  };

};
