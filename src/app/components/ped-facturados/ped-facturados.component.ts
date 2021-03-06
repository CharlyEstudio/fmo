import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhpService } from '../../services/services.index';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';

// Servicios
import { PedFacturadosService } from './ped-facturados.service';

@Component({
  selector: 'app-ped-facturados',
  templateUrl: './ped-facturados.component.html',
  styles: []
})
export class PedFacturadosComponent implements OnInit, OnDestroy {

  // facturados
  facturados: Subscription;
  factu: number = 0;
  factuImpo: number = 0;
  intFactu: any;

  // Por Zona o Lugar
  zona1: number = 0;
  zona1Impo: number = 0;
  zona2: number = 0;
  zona2Impo: number = 0;
  especiales: number = 0;
  especialesImpo: number = 0;

  constructor(
    private _phpService: PhpService,
    private _emitirFacturado: PedFacturadosService
  ) {
    // Subscrión a Pedidos Facturados
    this.facturados =  this.regresaFacturados().subscribe(
      numero => {
        this.factu = numero.cantidad;
        this.factuImpo = numero.importe;
        this._emitirFacturado.importe.emit(numero.importe);
      },
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit() {

    let h = new Date();

    let dia;

    if (h.getDate() < 10) {
      dia = '0' + h.getDate();
    } else {
      dia = h.getDate();
    }

    let mes;

    if (h.getMonth() < 10) {
      mes = '0' + (h.getMonth() + 1);
    } else {
      mes = (h.getMonth() + 1);
    }

    let anio = h.getFullYear();

    let fecha = anio + '-' + mes + '-' + dia;

    // Pedidos Facturados
    this._phpService.facturados(fecha)
      .subscribe((data) => {
        if ( data !== 0 ) {
          this.factu = data.cantidad;
          this.factuImpo = data.importe;
          this._emitirFacturado.importe.emit(data.importe);
        } else {
          this.factu = 0;
          this.factuImpo = 0;
        }
      });

    // Facturado Zona 1
    this._phpService.facturadoZona('2', fecha)
      .subscribe( ( data ) => {
        this.zona1 = data.cantidad;
        this.zona1Impo = data.importe;
      });

    // Facturado Zona 2
    this._phpService.facturadoZona('1', fecha)
      .subscribe( ( data ) => {
        this.zona2 = data.cantidad;
        this.zona2Impo = data.importe;
      });

    // Facturado Especiales
    this._phpService.facturadoEspecial(fecha)
      .subscribe( ( data ) => {
        this.especiales = data.cantidad;
        this.especialesImpo = data.importe;
      });

  }

  ngOnDestroy() {
    // Intervalo de Facturados
    this.facturados.unsubscribe();
    clearInterval(this.intFactu);
  }

  // Observable de Pedidos Facturados
  regresaFacturados(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      this.intFactu = setInterval( () => {

        let h = new Date();

        let dia;

        if (h.getDate() < 10) {
          dia = '0' + h.getDate();
        } else {
          dia = h.getDate();
        }

        let mes;

        if (h.getMonth() < 10) {
          mes = '0' + (h.getMonth() + 1);
        } else {
          mes = (h.getMonth() + 1);
        }

        let anio = h.getFullYear();

        let fecha = anio + '-' + mes + '-' + dia;

        // Facturados Total
        this._phpService.facturados(fecha)
          .subscribe( ( data ) => {

            if (data !== 0) {
              const facturados = {
                cantidad: data.cantidad,
                importe: data.importe
              };

              observer.next(facturados);
            } else {
              const facturados = {
                cantidad: 0,
                importe: 0
              };

              observer.next(facturados);
            }

          });

        // Facturado Zona 1
        this._phpService.facturadoZona('2', fecha)
        .subscribe( ( data ) => {
          this.zona1 = data.cantidad;
          this.zona1Impo = data.importe;
        });

        // Facturado Zona 2
        this._phpService.facturadoZona('1', fecha)
          .subscribe( ( data ) => {
            this.zona2 = data.cantidad;
            this.zona2Impo = data.importe;
          });

        // Facturado Especiales
        this._phpService.facturadoEspecial(fecha)
          .subscribe( ( data ) => {
            this.especiales = data.cantidad;
            this.especialesImpo = data.importe;
          });

      }, 3000);
    })
    .retry()
    .map((resp) => {
        return resp;
    });

  }

}
