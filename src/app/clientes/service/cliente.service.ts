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

  public getClienteById( id: number ) {

    return this.httpLocal.getClienteById( id );

  };

  public getClientePaginator( pageIndex: number, limite: number ) {

    return this.httpLocal.getClientePaginator( pageIndex, limite );

  };


};
