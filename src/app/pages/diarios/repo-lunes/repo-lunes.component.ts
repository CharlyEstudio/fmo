import { Component, OnInit } from '@angular/core';

import { DiariosService, ExcelService } from '../../../services/services.index';

@Component({
  selector: 'app-repo-lunes',
  templateUrl: './repo-lunes.component.html',
  styles: []
})
export class RepoLunesComponent implements OnInit {

  respuestaGeneral: boolean = false;
  ventas: boolean = false;
  esperar: boolean = true;

  diasLunes: any;
  saldo: number = 0;
  actual: any[] = [];
  nombre: string;

  constructor(
    private _diariosService: DiariosService,
    private _excel: ExcelService
  ) { }

  ngOnInit() {
    this.solicitar();
  }

  solicitar() {

    this.esperar = true;

    this.saldo = 0;

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

    this._diariosService.diasLunes(fecha)
      .subscribe( ( resp: any ) => {
        if (resp !== '') {
          this.diasLunes = resp;

          for (let i = 0; i < this.diasLunes.length; i++) {
            this.saldo += this.diasLunes[i].saldo;
          }

          this.esperar = false;
          this.respuestaGeneral = true;
          this.ventas = false;
        } else {
          this.ventas = true;
          this.esperar = false;
          this.respuestaGeneral = false;
        }
      });

  }

  obtenerPedidos(e) {
    this.actual = [];
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

    this._diariosService.pedidosDiaLunes(fecha, e.target.id)
      .subscribe( ( resp: any ) => {
        this.nombre = resp[0].asesor;
        this.actual = resp;
      });
  }

  descargar( data: any ) {
    let filename = 'reporte_' + data[0].asesor;
    this._excel.exportAsExcelFile(data, filename);
  }

}
