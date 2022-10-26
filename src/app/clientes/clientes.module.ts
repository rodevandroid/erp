import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { TabelaComponent } from './component/tabela/tabela.component';

@NgModule({
  declarations: [
    ClientesComponent,
    TabelaComponent,
    FormularioComponent
  ], imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    LayoutModule
  ]
})

export class ClientesModule { };
