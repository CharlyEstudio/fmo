import { Component, OnInit } from '@angular/core';
import { AsesoresService } from '../../services/services.index';

@Component({
  selector: 'app-pedidos-dia',
  templateUrl: './pedidos-dia.component.html',
  styles: []
})
export class PedidosDiaComponent implements OnInit {

  fecha: number = Date.now();

  datos: any[] = [];
  asesor: string;
  id: any;
  idFerrum: any;

  pedidos: any[] = [];

  partidas: any[] = [];

  msg: any;

  constructor(
    private _asesoresService: AsesoresService
  ) { }

  ngOnInit() {

    this.datos = JSON.parse(localStorage.getItem('usuario'));

    this.asesor = this.datos["nombre"];
    this.id = this.datos["_id"];
    this.idFerrum = this.datos["idFerrum"];

    // Pedidos del Día
    this._asesoresService.relacionPedidos(this.idFerrum)
      .subscribe( ( resp: any ) => {
        this.pedidos = resp.resp;
      });

  }

  verPedido(pedido: any) {
    this.msg = '';
    this._asesoresService.partidas(pedido.folio, this.idFerrum).subscribe((partidas: any) => {
      if (partidas.resp.length > 0) {
        this.partidas = partidas.resp;
      } else {
        this.msg = 'No hay partidas de este pedido.';
      }
    })
  }

}
