import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first, tap } from 'rxjs';
import { Cliente } from 'src/app/clientes/interface/cliente';
import { ClienteService } from 'src/app/clientes/service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit, AfterViewInit  {

  public paginator!: MatPaginator;

  public clientes: Cliente[]  = [];
  public cliente: Cliente     = <Cliente>{};
  public showTabela           = true;
  public recordLength         = 0;

  private service: ClienteService;

  clienteForm = new FormGroup({
    pedido  : new FormControl('', Validators.required),
    cliente : new FormControl('', [Validators.minLength(5), Validators.required]),
    vendedor: new FormControl('', [Validators.minLength(5), Validators.required]),
    valor   : new FormControl(0.0, [Validators.minLength(5), Validators.required]),
    link    : new FormControl(''),
    pix     : new FormControl(''),
    qrcode  : new FormControl(''),
    txid    : new FormControl(''),
  });

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {

    this.service = new ClienteService();

  };

  ngOnInit() {

    this.paginacao();

  };

  private paginacao() {

    this.service.getClientePaginator(this.paginator?.pageIndex ?? 0, this.paginator?.pageSize ?? 2).then( (data: any) => {

      this.clientes = <Cliente[]>data.ds;
      this.recordLength = data.qtdReg;

    });

  };

  ngAfterViewInit() {

    this.paginator?.page.pipe(
      tap(()=>this.paginacao())
    ).subscribe();

  };

  public setCliente( clienteFrm: any ): void {

    this.cliente = <Cliente>clienteFrm;
    this.showTabela = true;

    this.clientes.push( this.cliente );

  };

  public onClick(): void {

    this.clienteForm.setValue({
      pedido: '',
      cliente: '',
      vendedor: '',
      valor: 0.0,
      link: '',
      pix: '',
      qrcode: '',
      txid: ''
    });

    this.showTabela = !this.showTabela;

  };

  public clickLinha( row: any) {

    this.clienteForm.patchValue( row );
    this.showTabela = !this.showTabela;

  };

  public emitCliente( cliente: Cliente ){

    this.clienteForm.patchValue( cliente );

  };

  public gerarLink( cliente: Cliente): void {

    if ( cliente.link ){
      this.openSnackBar( {pedidoId: cliente.pedido, statusText: 'Link existente: ' + cliente.link} );
      return;
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const objIndex = this.clientes.findIndex(( obj => obj.pedido == cliente.pedido ));

    this.clientes[objIndex].process = true;

    this.http.post<Cliente>('http://localhost:3000/gerarLink', cliente, httpOptions).pipe(first()).subscribe({

      next: ( data: any) => {

        cliente.link = data.orderId;

        this.clientes[objIndex] = cliente;
        this.clientes[objIndex].process = false;

      }, error: ( err ) => {

        console.log( 'Erro no subscribe gerar link: ', err );
        this.clientes[objIndex].process = false;

      }

    });

  };

  public consultarLink( cliente: Cliente): void {

    if ( !cliente.link ){
      this.openSnackBar( {pedidoId: cliente.pedido, statusText: 'Linke nao encontrado'} );
      return;
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const objIndex = this.clientes.findIndex(( obj => obj.pedido == cliente.pedido ));
    this.clientes[objIndex].process = true;

    this.http.post<Cliente>('http://localhost:3000/consultarLink', cliente, httpOptions ).pipe(first()).subscribe({

      next: ( data: any ) => {

        this.clientes[objIndex].process = false;

        this.openSnackBar( data );

      }, error: ( err ) => {

        console.log( 'Erro no subscribe consulta link: ', err );
        this.clientes[objIndex].process = false;

      }

    });

  };

  public gerarPixCob( cliente: Cliente): void {

    if ( cliente.qrcode ){
      this.openSnackBar( {pedidoId: cliente.pedido, statusText: 'PIX existente: ' + cliente.txid} );
      return;
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const objIndex = this.clientes.findIndex(( obj => obj.pedido == cliente.pedido ));
    this.clientes[objIndex].process = true;

    this.http.post<Cliente>('http://localhost:3000/pix-cobranca', cliente, httpOptions ).pipe(first()).subscribe({

      next: ( data: any ) => {

        this.clientes[objIndex].process = false;
        this.clientes[objIndex].pix = data.location;
        this.clientes[objIndex].qrcode = data.textoImagemQRcode;
        this.clientes[objIndex].txid = data.txid;

      }, error: ( err ) => {

        console.log( 'Erro no subscribe gerar pix cobranca: ', err );
        this.clientes[objIndex].process = false;

      }

    });

  };

  private openSnackBar( data: any ) {
    this._snackBar.open(`Pedido: ${data.pedidoId}  Status: ${data.statusText}`, 'Fechar', {
      duration: 3000
    });
  };

  public objMatPag( pagina: MatPaginator ) {

    this.paginator = pagina;
    this.paginacao();

  };

};
