import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    position: new FormControl('', Validators.required),
    name    : new FormControl('', [Validators.minLength(5), Validators.required]),
    weight  : new FormControl(''),
    symbol  : new FormControl('')
  });

  constructor() {

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

  private teste: string = 'paulo';

  public onClick(): void {

    this.clienteForm.setValue({
      position: this.teste,
      name: '',
      weight: '',
      symbol: '',
    });

    this.showTabela = !this.showTabela;

  };

  public clickLinha( row: any) {

    this.clienteForm.patchValue( row );

    this.showTabela = !this.showTabela;

  };


};
