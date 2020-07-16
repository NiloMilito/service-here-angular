import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vendedor } from '../model/vendedor';
import { Validacoes } from 'src/app/validacoes';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      email: ['', Validators.compose([Validators.email])],
      cpf: ['', Validators.compose([Validators.required, Validacoes.ValidarCpf])],
      nascimento: [''],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      confirmarSenha: ['', Validators.compose([Validators.required])]
    }, {validator: Validacoes.SenhasCombinam });
  }

  enviarDados() {
    console.log(this.formulario.value);

    const dadosFormulario = this.formulario.value;

    const vendedor = new Vendedor(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha
    );
    alert(`O usuário ${vendedor.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(vendedor)}`);

    this.formulario.reset();
  }

   // Propriedades do formulário que vamos utilizar para obter os erros
   get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get cpf() {
    return this.formulario.get('cpf');
  }

  get nascimento() {
    return this.formulario.get('nascimento');
  }

  get senha() {
    return this.formulario.get('senha');
  }

  get confirmarSenha() {
    return this.formulario.get('confirmarSenha');
  }

}
