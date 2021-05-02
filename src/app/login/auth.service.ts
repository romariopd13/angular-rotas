import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>()
  constructor(private router: Router) { }
  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'romario.pires@grupolife.med.br' && usuario.senha == 'madelife') {
      this.usuarioAutenticado = true
      this.router.navigate(['/'])
      this.mostrarMenuEmitter.emit(true)
    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false)
    }
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }
}
