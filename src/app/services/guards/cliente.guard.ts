import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class ClienteGuard implements CanActivate {

  constructor(
    private _usuarioService: UsuarioService
  ) {}

  canActivate() {
    if ( this._usuarioService.usuario.rol === 'CLI_ROLE' ) {
      return true;
    } else {
      console.log('Bolqueado por el CLIENTE GUARD');
      swal('Sin acceso' , 'No tiene autorizado ingresar en esta sección.', 'error');
      return false;
    }
  }
}
