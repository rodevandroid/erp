import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { IndicadoresComponent } from './indicadores/indicadores.component';


@NgModule({
  declarations: [
    IndicadoresComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ]
})
export class IndicadoresModule { }
