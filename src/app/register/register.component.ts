import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Object = {
    name: '',
    username: '',
    email: '',
    password: ''
  }
  formulario: FormGroup;

  constructor(private service: AuthenticationService,
              private alertService: AlertService,) { }

  ngOnInit() {
    this.user = {
      name: '',
      username: '',
      email: '',
      password: ''
    }
    this.validacaoFormulario();
  }

  validacaoFormulario() {
    this.formulario = new FormGroup({
      name: new FormControl('', myPatternNome),
      username: new FormControl('', myPatternUsername),
      email: new FormControl("", Validators.compose([Validators.email])),
      password: new FormControl("", myPatternPassword),
    });
  }

  salvar() {
    this.service.register(this.formulario.value)
      .pipe()
      .subscribe(data => {
        this.alertService.success('Usuário registrado com sucesso', true);
        this.ngOnInit();
      
      }, error => {
        this.alertService.error('Falha na Operação');
        console.log(error);
      });
  }

}

/**
 * 
 * Padrao da senha.
 * por enquanto vamos habilitar apenas 
 * no min 06 caracteres e max 20.
 * 
 */
export const myPatternPassword = [
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(20),
];

/**
 * 
 * Padrao de nome de usuario.
 * por enquanto vamos habilitar apenas 
 * no min 04 caracteres.
 * 
 */
export const myPatternNome = [
  Validators.required,
  Validators.minLength(4),
  Validators.maxLength(190),
];

export const myPatternUsername = [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(20),
];
