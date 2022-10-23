import { Injectable } from '@angular/core';
import { HttpLocal } from 'src/app/backend/httpLocal';

@Injectable({
  providedIn: 'root'
})

export class IndicadorService {

  private httpLocal: HttpLocal;

constructor() {

  this.httpLocal = new HttpLocal();

 };

 public getTotalVendas() {

  return this.httpLocal.getTotalVendas();

 };

 public getComissoes() {

  return this.httpLocal.getComissoes();

 };

 public getBoletosAtrazo() {

  return this.httpLocal.getBoletosAtrazo();

 };

 public getBoletosReceber() {

  return this.httpLocal.getBoletosReceber();

 };

};
