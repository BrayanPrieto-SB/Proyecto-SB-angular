import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Convenio } from '../shared/convenio';
import { Validators} from '@angular/forms';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ConvenioService } from '../services/convenio.service';
import { Router } from '@angular/router'
import { baseURL } from '../shared/baseurl';


@Component({
  selector: 'app-crearconvenio',
  templateUrl: './crearconvenio.component.html',
  styleUrls: ['./crearconvenio.component.scss']


})
export class CrearconvenioComponent implements OnInit {
  convenio: Convenio = new Convenio();
  constructor(private convenioService: ConvenioService, private router: Router) { }

  ngOnInit(): void {
  }


  guardarConvenio(){
    this.convenioService.crearConvenio(this.convenio).subscribe(data => {
      console.log(data);
      this.irConveniosList();
    },
    error => console.log(error));
  }

  irConveniosList(){
    this.router.navigate(['/home']);
  }
  onSubmit() {
    console.log(this.convenio);
    

    this.guardarConvenio();
}

  formErrors={
    'nombre':'',
    'lastname': '',
    'telnum': '',
    'email': ''
  }

  validationMessages = {
    'nombre': {
      'required':      'El nombre es requerido.',
      'minlength':     'El nombre debe poseer minimo 5 caracteres.',
      'maxlength':     'El nombre no puede ser mas largo de 50 caracteres.'
    }

  };







}
