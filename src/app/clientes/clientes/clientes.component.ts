import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Cliente } from 'src/app/clientes/interface/cliente';
import { ClienteService } from 'src/app/clientes/service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  public clientes: Cliente[]  = [];
  public cliente: Cliente     = <Cliente>{};
  public showTabela           = true;

  private service: ClienteService;

  clienteForm = new FormGroup({
    pedido  : new FormControl('', Validators.required),
    cliente : new FormControl('', [Validators.minLength(5), Validators.required]),
    vendedor: new FormControl('', [Validators.minLength(5), Validators.required]),
    valor   : new FormControl(0.0, [Validators.minLength(5), Validators.required]),
    link    : new FormControl(''),
  });

  constructor(private http: HttpClient) {

    this.service = new ClienteService();

  };

  ngOnInit() {

    this.service.getAllCliente().then( data => {

      this.clientes = <Cliente[]>data;

    });

  };

  public setCliente( clienteFrm: any ): void {

    this.cliente = <Cliente>clienteFrm;
    this.showTabela = true;

    this.clientes.push( this.cliente );

    console.log('Conatiner Linha: ', clienteFrm);

  };

  public onClick(): void {

    this.clienteForm.setValue({
      pedido: '',
      cliente: '',
      vendedor: '',
      valor: 0.0,
      link: ''
    });

    this.showTabela = !this.showTabela;

  };

  public clickLinha( row: any) {

    this.clienteForm.patchValue( row );

    this.showTabela = !this.showTabela;

  };

  public gerarLink( cliente: Cliente): void {

    console.log( 'Gerar link: ', cliente );
    return;

    this.http.post('https://testapi.maxipago.net/UniversalAPI/postAPI', this.postedXmlData( cliente ), this.httpOptions()).pipe(first()).subscribe({

      next: ( resp ) => {

        console.log( 'Resposta subscribe: ', resp );

      },

      error: ( err ) => {

        console.log( 'Erro no subscribe: ', err );

      }

    });

  };

  public consultarLink( cliente: Cliente): void {

    console.log( 'Consultar link: ', cliente );
    return;

    this.http.post('https://testapi.maxipago.net/UniversalAPI/postAPI', this.getXmlData( cliente.link ), this.httpOptions()).pipe(first()).subscribe({

      next: ( resp ) => {

        console.log( 'Resposta subscribe: ', resp );

      },

      error: ( err ) => {

        console.log( 'Erro no subscribe: ', err );

      }

    });

  };

  private httpOptions(): Object {

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/xml', //<- To SEND XML
        'Accept':  'application/xml',       //<- To ask for XML
        'Response-Type': 'text'             //<- b/c Angular understands text
      })
    };

  };

  private postedXmlData( cliente: Cliente): string {

    let pedido = this.pedidoDados( cliente );

    return `<?xml version="1.0" encoding="UTF-8"?>
    <api-request>
      <verification>
          <merchantId>${pedido.storeId}</merchantId>
          <merchantKey>${pedido.storeKey}</merchantKey>
      </verification>
      <command>add-payment-order</command>
      <request>
        <referenceNum>${pedido.numero}</referenceNum>
        <fraudCheck>${pedido.fraudCheck}</fraudCheck>
        <billing>
          <address>${pedido.endereco}</address>
          <address2>1 Andar</address2>
          <district>${pedido.bairro}</district>
          <city>${pedido.cidade}</city>
          <state>${pedido.estado}</state>
          <postalcode>${pedido.cep}</postalcode>
          <country>${pedido.pais}</country>
          <email>${pedido.email}</email>
          <customerIdExt>${pedido.cpf}</customerIdExt>
          <firstName>${pedido.nome}</firstName>
          <lastName>${pedido.sobrenome}</lastName>
          <dob>${pedido.nacimento}</dob>
          <sex>${pedido.sexo}</sex>
          <phone>${pedido.telefone}</phone>
        </billing>
        <transactionDetail>
          <description>${pedido.descricao}</description>
          <comments>${pedido.comentario}</comments>
          <emailSubject>${pedido.subject}</emailSubject>
          <expirationDate>${pedido.expiracao}</expirationDate>
          <payType>
            <creditCard>
              <processorID>1</processorID>
              <operation>sale</operation>
              <numberOfInstallments>${pedido.parcelas}</numberOfInstallments>
              <currencyCode>BRL</currencyCode>
              <amount>${pedido.valor}</amount>
            </creditCard>
          </payType>
        </transactionDetail>
      </request>
    </api-request>`;

  };

  private getXmlData( payOrderId: string ): string {

    return `<?xml version="1.0" encoding="UTF-8"?>
    <api-request>
      <verification>
        <merchantId>store-id</merchantId>
        <merchantKey>store-key</merchantKey>
      </verification>
      <command>get-payment-order</command>
      <request>
        <payOrderId>${payOrderId}</payOrderId>
      </request>
    </api-request>`;

  };

  private pedidoDados( cliente: Cliente ): any {

    return {
      numero: 20221103,
      valor: 153.390,
      endereco: 'Rod. Darly Santos',
      bairro: 'Jockey de Itaparica',
      cidade: 'Vila Velha',
      estado: 'ES',
      cep: '29.100-250',
      pais: 'Brasil',
      email: 'rodrigo.almeida@litoraltextil.com.br',
      cpf: '07199988897',
      nome: cliente.cliente,
      sobrenome: 'Coutinho',
      nacimento: '15/04/2022',
      sexo: 'M',
      telefone: '27 99924 8869',
      descricao: 'Pagamento Kit Placa Solar',
      comentario: 'Pagar ate dia 30',
      subject: 'Favor efetuar o pagamento',
      expiracao: '06/17/2022',
      parcelas: 10,
      fraudCheck: 'N',
      storeId: 44710,
      storeKey: ''
    };

  };

};
