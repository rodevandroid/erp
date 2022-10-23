import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/clientes/interface/cliente';
import { ClienteService } from 'src/app/clientes/service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];
  public cliente: Cliente = <Cliente>{};
  public showTabela = true;

  private service: ClienteService;

  constructor() {

    this.service = new ClienteService();

  };

  async ngOnInit() {

    this.service.getAllCliente().then( data => {

      this.clientes = <Cliente[]>data;

    });

  };

  setCliente( linha: any ): void {

    this.cliente = <Cliente>linha;
    this.showTabela = false;

    console.log('Conatiner Linha: ', linha);

  };

  public onClick(): void {

    this.showTabela = !this.showTabela;

  };

};
