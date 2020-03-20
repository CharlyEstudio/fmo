import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rutas
import { URL_SERVICIO_GENERAL, PUERTO_SERVER, PUERTO_INTERNO, PARAM_KEY, KEY } from '../../config/config';

// Modelo
import { GuiasPartidas } from '../../models/guias.model';
import { Guia } from '../../models/guia.model';
import { Chofer } from '../../models/chofer.model';
import { Unidades } from '../../models/unidades.model';
import { UsuarioService } from '../usuario/usuario.service';
import { ServidorService } from '../db/servidor.service';

@Injectable()
export class GuiasService {

  url: string;
  token: string;

  head = new HttpHeaders();
  headers = this.head.append(PARAM_KEY, KEY);

  constructor(
    private http: HttpClient,
    private _usuario: UsuarioService,
    private _servidor: ServidorService
  ) {
    this.token = this._usuario.token;
  }

  obtenerFolio( folio: any ) {
    this.url = `${URL_SERVICIO_GENERAL}/services/pedidos/info/factura/${folio}/${this._servidor.db}`;

    return this.http.get( this.url, { headers: this.headers } );
  }

  obtenerGuias() {
    // this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guias/todo';

    // this.url += '?token=' + this.token;

    // return this.http.get( this.url )
    //   .map( (resp: any) => {
    //     return resp;
    //   });
  }

  obtenerGuiasDia(fecha: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/dia/' + fecha;

    this.url += '?token=' + this.token;

    return this.http.get( this.url )
      .map( (resp: any) => {
        return resp;
      });
  }

  buscarFolioGuia(folio: any) {
    // this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guias/buscar/' + folio;

    // this.url += '?token=' + this.token;

    // return this.http.get( this.url );
  }

  buscarFolioGuiaGnl(folio: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/buscar/gnal/' + folio;

    this.url += '?token=' + this.token;

    return this.http.get( this.url );
  }

  buscarFolioHistorial(folio: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/buscar/historial/' + folio;

    this.url += '?token=' + this.token;

    return this.http.get( this.url );
  }

  buscarEntregasCliente(numero: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/ultimas/5/' + numero;

    this.url += '?token=' + this.token;

    return this.http.get( this.url );
  }

  buscarGuiaPrin(folio: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/obtener/' + folio;

    this.url += '?token=' + this.token;

    return this.http.get( this.url );
  }

  buscarGuiaPrinId(guia: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/obtener/factura';

    this.url += '?token=' + this.token;

    return this.http.put( this.url, guia );
  }

  procesarGuia(guia: GuiasPartidas) {
    // this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guias';

    // this.url += '?token=' + this.token;

    // return this.http.post( this.url, guia )
    //   .map( (resp: any) => {
    //     return resp;
    //   });
  }

  guardarGuia(guia: Guia, chofer: Chofer) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/guia';

    this.url += '?token=' + this.token;

    return this.http.post( this.url, {guia: guia, chofer: chofer} )
      .map( (resp: any) => {
        return resp;
      });
  }

  // Esto ver mas a delante si lo quito
  guardarRuta(ruta: any, chofer: Chofer) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/ruta';

    this.url += '?token=' + this.token;

    return this.http.post( this.url, {ruta: ruta, chofer: chofer} )
      .map( (resp: any) => {
        return resp;
      });
  }

  guardarRutaGuia(ruta: any, chofer: Chofer) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/rutas';

    this.url += '?token=' + this.token;

    return this.http.post( this.url, {ruta: ruta, chofer: chofer} )
      .map( (resp: any) => {
        return resp;
      });
  }

  buscarPartidasFolio(folio: any) {
    // this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guias/buscar/partidas/' + folio;

    // this.url += '?token=' + this.token;

    // return this.http.get( this.url )
    //   .map( (resp: any) => {
    //     return resp;
    //   });
  }

  buscarEspeciales(folio: any) {
    return new Promise(resolved => {
      this.url = `${URL_SERVICIO_GENERAL}/services/almacen/especiales/guia/factura/${folio}/${this._servidor.db}`;

      return this.http.get( this.url, { headers: this.headers } ).subscribe((resp: any) => {
        resolved(resp);
      });
    });
    // this.url = `${URL_SERVICIO_GENERAL}/services/almacen/especiales/guia/factura/${folio}/${this._servidor.db}`;

    // return this.http.get( this.url, { headers: this.headers } );
  }

  enviarPDFguia(guiaPar: any, guia: any, especiales: any, chofer: Chofer, carro: Unidades, razon: any) {
    const url = `${URL_SERVICIO_GENERAL}:${PUERTO_INTERNO}/resumen/guia?token=${this.token}`;

    return this.http.post( url, {guiaPar, guia, especiales: guia.especiales, chofer, carro, razon} ).map((resp: any) => {
      return resp;
    });
  }

  reasignarFolio(folio: any) {
    // this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guias/buscar/reasignar/' + folio._id;

    // return this.http.put(this.url, folio);
  }

  enviarEmail(folio: any) { // TODO Email
    this.url = URL_SERVICIO_GENERAL + ':' +
                PUERTO_SERVER + '/api/email.php?folio=' + JSON.stringify(folio);

    return this.http.get(this.url);
  }

  obtenerFacturasFolio(folio: any) {
    // this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guias/buscar/partidas/' + folio;

    // return this.http.get( this.url )
    //   .map( (resp: any) => {
    //     return resp;
    //   });
  }

  buscarGuiasRango(inicial: any, final: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/buscar/rango/' + inicial + '/' + final;

    this.url += '?token=' + this.token;

    return this.http.get( this.url )
      .map( (resp: any) => {
        return resp;
      });
  }

  borrarGuia(id: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/' + id;

    this.url += '?token=' + this.token;

    return this.http.delete( this.url )
      .map( (resp: any) => {
        return resp;
      });
  }

  coordenadasCliente(numero: any) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/coordenadas/numero/' + numero;

    this.url += '?token=' + this.token;

    return this.http.get( this.url );
  }

  directionsGoogle(origin: any, destiny: any) {
    return this.http.get('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin.lat + ',' + origin.lng + '&region=es'
    + '&destination=' + destiny.lat + ',' + destiny.lng + '&departure_time=now&key=AIzaSyDLxUFj_KCshQNqoUG2i7WZFbkR0nigdhs');
  }

  actualizarGuiaPri(data: any, chofer: Chofer) {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/guia/actualizar/principal/';

    this.url += '?token=' + this.token;

    return this.http.put( this.url, {guia: data, chofer} );
  }

  obtenerUnidades() {
    this.url = URL_SERVICIO_GENERAL +  ':' + PUERTO_INTERNO + '/unidades';

    this.url += '?token=' + this.token;

    return this.http.get(this.url);
  }

  obtenerTodasFacturasTx() {
    this.url = `${URL_SERVICIO_GENERAL}/services/pedidos/facturas/tx/${this._servidor.db}`;

    return this.http.get( this.url, { headers: this.headers } );
  }

  generarReporteGuiasDia(data: any) {
    const url = `${URL_SERVICIO_GENERAL}:${PUERTO_INTERNO}/resumen/guia/reporte?token=${this.token}`;

    return this.http.post( url, {data} ).map((resp: any) => {
      return resp;
    });
  }

}
