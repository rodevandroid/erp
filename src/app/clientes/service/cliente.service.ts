import { Injectable } from '@angular/core';

import { HttpLocal } from 'src/app/backend/httpLocal';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private httpLocal: HttpLocal;

  constructor() {

    this.httpLocal = new HttpLocal();

  };

  public getAllCliente() {

    return this.httpLocal.getCliente();

  };

  public getClienteById( pedido: string ) {

    return this.httpLocal.getClienteById( pedido );

  };

  public getClientePaginator( pageIndex: number, limite: number ) {

    return this.httpLocal.getClientePaginator( pageIndex, limite );

  };

};
