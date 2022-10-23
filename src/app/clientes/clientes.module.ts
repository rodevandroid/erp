import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { TabelaComponent } from './component/tabela/tabela.component';
import { FormularioComponent } from './component/formulario/formulario.component';


@NgModule({
  declarations: [
    ClientesComponent,
    TabelaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})

export class ClientesModule { };
