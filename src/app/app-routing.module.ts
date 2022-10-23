import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'clientes'},
  {path: 'indicadores', loadChildren: () => import('./indicadores/indicadores.module').then( m => m.IndicadoresModule)},
  {path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
