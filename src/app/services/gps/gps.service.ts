import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Config
import { URL_SERVICIO_GENERAL, PUERTO_INTERNO, PUERTO_INTERNO_DOS, PARAM_KEY, KEY } from '../../config/config';

// Modelo
import { Visor } from '../../models/visor.model';

// Servicios
import { ServidorService } from '../db/servidor.service';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class GpsService {

  head = new HttpHeaders();
  headers = this.head.append(PARAM_KEY, KEY);

  token: string;
  url: string;

  constructor(
    public http: HttpClient,
    private _servidor: ServidorService,
    private _usuarioS: UsuarioService
  ) {
    this.token = this._usuarioS.token;
  }

  obtenerUbicaciones() {
    this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/usuario/gps/ultima/ubicacion';

    this.url += '?token=' + this.token;

    return this.http.get(this.url);
  }

  obtenerClientesTotal() {
    this.url = `${URL_SERVICIO_GENERAL}/services/clientes/obtener/cliente/${this._servidor.db}`;

    return this.http.get( this.url, { headers: this.headers } );
  }

  obtenerClientes(diavis: any) {
    // this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/busqueda/clientes/obtenerCliente/mostrar/' + diavis;

    // this.url += '?token=' + this.token;

    // return this.http.get(this.url);
  }

  obtenerAsesorEspefico(id: any) {
    this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/usuario/especifico/' + id;

    this.url += '?token=' + this.token;

    return this.http.get(this.url);
  }

  obtenerIMEIAsesorAll(desde: number = 0) {
    this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/gps/desde?desde=' + desde;

    this.url += '&token=' + this.token;

    return this.http.get(this.url);
  }

  obtenerIMEIAsesorAllDonwload() {
    this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/gps';

    this.url += '&token=' + this.token;

    return this.http.get(this.url);
  }

  actualizarUsusarioImei( usuario: Visor ) {
    this. url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/gps/' + usuario._id;

    this.url += '&token=' + this.token;

    return this.http.put( this.url, usuario );
  }

  borrarUsuarioImei( id: string ) {
    this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/gps/' + id;

    this.url += '&token=' + this.token;

    return this.http.delete( this.url );
  }

  nuevoUsuarioIMEI(visor: Visor) {
    this.url = URL_SERVICIO_GENERAL + ':' + PUERTO_INTERNO + '/gps';

    this.url += '&token=' + this.token;

    return this.http.post( this.url, visor );
  }

}
