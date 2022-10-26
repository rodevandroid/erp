import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/clientes/interface/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  @Input() formulario: FormGroup = <FormGroup>{};
  @Output() clienteFrm: EventEmitter<any> = new EventEmitter();

  constructor() { };

  ngOnInit(): void {

  };

  onSubmit() {

    if ( this.formulario.valid && this.formulario.valueChanges) {

      this.clienteFrm.emit( <Cliente>this.formulario.value );

    };

  };

};
