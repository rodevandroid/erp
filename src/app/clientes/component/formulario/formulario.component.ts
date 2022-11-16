import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/clientes/interface/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnChanges {

  @Input() formulario: FormGroup = <FormGroup>{};
  @Output() clienteFrm: EventEmitter<any> = new EventEmitter();
  @Output() clienteDados: EventEmitter<Cliente> = new EventEmitter();

  public cliente: Cliente = <Cliente>{};

  constructor() { };

  ngOnChanges(): void {

    this.cliente = <Cliente>this.formulario.value;

  };

  onSubmit(): void {

    if ( this.formulario.valid && this.formulario.valueChanges) {

      this.clienteFrm.emit( <Cliente>this.formulario.value );

    };

  };

  emiteCliente( cliente: Cliente): void {

    this.clienteDados.emit( cliente );

  };

};
