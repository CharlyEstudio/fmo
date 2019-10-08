import { Component, OnInit, OnDestroy } from '@angular/core';

// Servicios
import { MensajesContactoService, HerramientasService, TiendaService } from '../../services/services.index';

@Component({
  selector: 'app-dashborar-dir',
  templateUrl: './dashborar-dir.component.html',
  styles: []
})
export class DashborarDirComponent implements OnInit, OnDestroy {

  fecha: number = Date.now();
  mensajes: boolean = false;
  aparecer: boolean = false;
  tiempo: any;
  importeFacturado: number = 0;

  constructor(
    private mensajeService: MensajesContactoService,
    private herramientas: HerramientasService,
    private store: TiendaService,
  ) {
    this.mensajeService.mensajes.subscribe((mensaje: any) => {
      this.mensajes = mensaje.status;
    });

    this.store.obtenerMensajesContacto().subscribe((mensajes: any) => {
      if (mensajes.length > 0) {
        this.mensajes = true;
      } else {
        this.mensajes = false;
      }
    });

    const hora = this.herramientas.horaActual();

    if (hora >= '18:02:00') {
      this.aparecer = true;
    } else {
      this.aparecer = false;
    }

    this.verTiempo();
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearInterval(this.tiempo);
  }

  verTiempo() {
    this.tiempo = setInterval(() => {
      const hora = this.herramientas.horaActual();

      if (hora >= '18:02:00') {
        this.aparecer = true;
      } else {
        this.aparecer = false;
      }
    }, 1000);
  }

}
