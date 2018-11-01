import { Component, OnInit } from '@angular/core';

import { DiariosService } from '../../../services/services.index';
import { SweetAlert } from 'sweetalert/typings/core';
import { URL_SERVICE } from '../../../config/config';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: []
})
export class InventarioComponent implements OnInit {

  url: string;

  respuesta: boolean = true;
  respuestaGeneral: boolean = false;
  ventas: boolean = false;
  esperar: boolean = false;

  inventario: any;
  subtotal: number = 0;
  iva: number = 0;
  total: number = 0;

  constructor(
    private _diariosService: DiariosService
  ) {
    this.url = URL_SERVICE;
  }

  ngOnInit() {
    this.solicitar();
  }

  solicitar() {

    this.esperar = true;
    this.respuesta = false;

    this.subtotal = 0;

    this._diariosService.inventario()
      .subscribe( ( resp: any ) => {
        if (resp != '') {
          console.log(resp);
          this.inventario = resp;

          for(let i=0; i < this.inventario.length; i++){
            this.subtotal += this.inventario[i].subtotal;
            this.iva += this.inventario[i].iva;
            this.total += this.inventario[i].total;
          }

          this.respuesta = false;
          this.esperar = false;
          this.respuestaGeneral = true;
          this.ventas = false;
        } else {
          this.ventas = true;
          this.esperar = false;
          this.respuesta = false;
          this.respuestaGeneral = false;
        }
      });

  }

}