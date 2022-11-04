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
            {id: 0, pedido: '0001', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: ''},
            {id: 1, pedido: '0002', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: ''},
            {id: 2, pedido: '0003', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: ''},
            {id: 3, pedido: '0004', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: ''},
            {id: 4, pedido: '0005', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: ''},
            {id: 5, pedido: '0006', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: ''},
            {id: 6, pedido: '0007', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: ''},
            {id: 7, pedido: '0008', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: ''},
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
            {id: 0, pedido: '0001', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: ''},
            {id: 1, pedido: '0002', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: ''},
            {id: 2, pedido: '0003', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: ''},
            {id: 3, pedido: '0004', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: ''},
            {id: 4, pedido: '0005', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: ''},
            {id: 5, pedido: '0006', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: ''},
            {id: 6, pedido: '0007', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: ''},
            {id: 7, pedido: '0008', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: ''},
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
