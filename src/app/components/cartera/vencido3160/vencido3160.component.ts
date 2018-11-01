import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhpService } from '../../../services/services.index';

import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-vencido3160',
  templateUrl: './vencido3160.component.html',
  styles: []
})
export class Vencido3160Component implements OnInit, OnDestroy {

  // Morisidad de 31 a 60 días
  morosidad: Subscription;
  mor: number = 0;
  intMor: any;

  constructor(
    private _phpService: PhpService
  ) {

    // Subscrión a Morosidad
    this.morosidad =  this.regresaMorosidad().subscribe(
      numero => {
        this.mor = numero.importe;
      },
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino!')
    );

  }

  ngOnInit() {

    // Morosidad
    this._phpService.mor3160()
      .subscribe((data) => {
        if ( data[0].importe != 0 ) {
          this.mor = data[0].importe;
        } else {
          this.mor = 0;
        }
      });

  }

  ngOnDestroy() {

    // Intervalo de Total Financiado
    this.morosidad.unsubscribe();
    clearInterval(this.intMor);

  }

  // Observable de Morosidad
  regresaMorosidad(): Observable<any> {

    return new Observable((observer: Subscriber<any>) => {

      this.intMor = setInterval( () => {
        
        this._phpService.mor3160()
          .subscribe( ( data ) => {

            if (data[0].importe != 0) {

              const morosidad = {
                importe: data[0].importe
              };

              observer.next(morosidad);

            } else {

              const morosidad = {
                importe: 0
              };

              observer.next(morosidad);

            }

          });

      }, 10000);

    })
    .retry()
    .map((resp) => {
        return resp;
    });

  }

}