import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class SuperGuard implements CanActivate {
  constructor(
    private _usuarioService: UsuarioService
  ) {}

  canActivate() {
    if ( this._usuarioService.usuario.rol === 'ADMIN_ROLE'
    || this._usuarioService.usuario.rol === 'DIR_ROLE'
    || this._usuarioService.usuario.rol === 'GER_ROLE'
    || this._usuarioService.usuario.rol === 'AUD_ROLE'
    || this._usuarioService.usuario.rol === 'SUP_ROLE' ) {
      return true;
    } else {
      console.log('Bolqueado por el SUPER GUARD');
      // this._usuarioService.logout();
      swal('Sin acceso' , 'No tiene autorizado ingresar en esta sección.', 'error');
      return false;
    }
  }
}