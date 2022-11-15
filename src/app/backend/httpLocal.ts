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
            {id: 0, pedido: '0001', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 1, pedido: '0002', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 2, pedido: '0003', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 3, pedido: '0004', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 4, pedido: '0005', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 5, pedido: '0006', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 6, pedido: '0007', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 7, pedido: '0008', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 8, pedido: '0009', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 9, pedido: '0010', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 10, pedido: '0011', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 11, pedido: '0012', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 12, pedido: '0013', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 13, pedido: '0014', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 14, pedido: '0015', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 15, pedido: '0016', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 16, pedido: '0017', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 17, pedido: '0018', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 18, pedido: '0019', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 19, pedido: '0020', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 20, pedido: '0021', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 21, pedido: '0022', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 22, pedido: '0023', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 23, pedido: '0024', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 24, pedido: '0025', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 25, pedido: '0026', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 26, pedido: '0027', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 27, pedido: '0028', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 28, pedido: '0029', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 29, pedido: '0030', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 30, pedido: '0031', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 31, pedido: '0032', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 32, pedido: '0033', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 33, pedido: '0034', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 34, pedido: '0035', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 35, pedido: '0036', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 36, pedido: '0037', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 37, pedido: '0038', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 38, pedido: '0039', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 39, pedido: '0040', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 40, pedido: '0041', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 41, pedido: '0042', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 42, pedido: '0043', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 43, pedido: '0044', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 44, pedido: '0045', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 45, pedido: '0046', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 46, pedido: '0047', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          ];

          resolve( <Cliente[]>this.dsCliente );

        }, 0);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getClienteById( pedido: string ) {

    return new Promise( (resolve, reject) => {

      try {

        setTimeout( () => {

          this.dsCliente = [
            {id: -1, pedido: '0001', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 150357.25, link: 'link://eder.bolonha/linkando', process: false, pix: '', qrcode: '', txid: ''},
            {id: 0, pedido: '0001', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: 'link://rodrigo.coutinho/rcca', process: false, pix: '', qrcode: '', txid: ''},
            {id: 1, pedido: '0002', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 2, pedido: '0003', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 3, pedido: '0004', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 4, pedido: '0005', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 5, pedido: '0006', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 6, pedido: '0007', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 7, pedido: '0008', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 8, pedido: '0009', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 9, pedido: '0010', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 10, pedido: '0011', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 11, pedido: '0012', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 12, pedido: '0013', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 13, pedido: '0014', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 14, pedido: '0015', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 15, pedido: '0016', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 16, pedido: '0017', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 17, pedido: '0018', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 18, pedido: '0019', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 19, pedido: '0020', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 20, pedido: '0021', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 21, pedido: '0022', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 22, pedido: '0023', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 23, pedido: '0024', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 24, pedido: '0025', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 25, pedido: '0026', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 26, pedido: '0027', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 27, pedido: '0028', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 28, pedido: '0029', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 29, pedido: '0030', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 30, pedido: '0031', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 31, pedido: '0032', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 32, pedido: '0033', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 33, pedido: '0034', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 34, pedido: '0035', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 35, pedido: '0036', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 36, pedido: '0037', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 37, pedido: '0038', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 38, pedido: '0039', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 39, pedido: '0040', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 40, pedido: '0041', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 41, pedido: '0042', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 42, pedido: '0043', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 43, pedido: '0044', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 44, pedido: '0045', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 45, pedido: '0046', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
            {id: 46, pedido: '0047', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          ].filter( item => item.pedido == pedido );

          resolve( <Cliente[]>this.dsCliente );

        }, 0);

      } catch (error) {

        reject( error );

      };

    });

  };

  public getClientePaginator( pageIndex: number, limite: number ) {

    return new Promise( (resolve, reject) => {

      try {

        this.dsCliente = [
          {id: 0, pedido: '0001', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 1, pedido: '0002', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 2, pedido: '0003', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 3, pedido: '0004', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 4, pedido: '0005', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 5, pedido: '0006', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 6, pedido: '0007', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 7, pedido: '0008', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 8, pedido: '0009', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 9, pedido: '0010', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 10, pedido: '0011', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 11, pedido: '0012', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 12, pedido: '0013', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 13, pedido: '0014', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 14, pedido: '0015', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 15, pedido: '0016', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 16, pedido: '0017', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 17, pedido: '0018', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 18, pedido: '0019', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 19, pedido: '0020', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 20, pedido: '0021', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 21, pedido: '0022', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 22, pedido: '0023', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 23, pedido: '0024', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 24, pedido: '0025', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 25, pedido: '0026', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 26, pedido: '0027', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 27, pedido: '0028', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 28, pedido: '0029', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 29, pedido: '0030', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 30, pedido: '0031', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 31, pedido: '0032', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 32, pedido: '0033', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 33, pedido: '0034', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 34, pedido: '0035', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 35, pedido: '0036', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 36, pedido: '0037', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 37, pedido: '0038', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 38, pedido: '0039', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 39, pedido: '0040', cliente: 'Rodrigo Coutinho', vendedor: 'Eder Bolonha', valor: 150357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 40, pedido: '0041', cliente: 'Eder Bolonha', vendedor: 'Rodrigo Coutinho', valor: 220357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 41, pedido: '0042', cliente: 'Anderson Rocha', vendedor: 'Bruna Xavier', valor: 330357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 42, pedido: '0043', cliente: 'Bruna Xavier', vendedor: 'Anderson Rocha', valor: 440357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 43, pedido: '0044', cliente: 'Haira Carminati', vendedor: 'Cassiano Ferreira', valor: 550357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 44, pedido: '0045', cliente: 'Cassiano Ferreira', vendedor: 'Haira Carminati', valor: 660357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 45, pedido: '0046', cliente: 'Rayssa Melo', vendedor: 'Paulo Machado', valor: 77357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
          {id: 46, pedido: '0047', cliente: 'Paulo Machado', vendedor: 'Rayssa Melo', valor: 88357.25, link: '', process: false, pix: '', qrcode: '', txid: ''},
        ];

        let indice = ( pageIndex * limite );

        resolve({
          ds: this.dsCliente.slice(indice, indice > 0 ? (limite + indice) : limite ),
          qtdReg: this.dsCliente.length
        });

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
