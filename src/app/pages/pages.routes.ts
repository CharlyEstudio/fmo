import { Routes, RouterModule } from '@angular/router';

// Guards
import {
    AdminGuard,
    VerificaTokenGuard,
    SuperGuard,
    AsesoresGuard,
    ClienteGuard,
    DireccionGuard,
    AuditoriaGuard,
    MesaGuard,
    GuiasEdoCtaGuard
} from '../services/services.index';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashborarDirComponent } from './dashborar-dir/dashborar-dir.component';
import { DasboardAseComponent } from './dasboard-ase/dasboard-ase.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VentaComponent } from './diarios/venta/venta.component';
import { CompraComponent } from './diarios/compra/compra.component';
import { UtilidadesComponent } from './diarios/utilidades/utilidades.component';
import { NotasComponent } from './diarios/notas/notas.component';
import { InventarioComponent } from './diarios/inventario/inventario.component';
import { BackorderComponent } from './diarios/backorder/backorder.component';
import { EntSalComponent } from './diarios/ent-sal/ent-sal.component';
import { RepoLunesComponent } from './diarios/repo-lunes/repo-lunes.component';
import { CarteraProveedoresComponent } from './diarios/cartera-proveedores/cartera-proveedores.component';
import { CarteraClientesComponent } from './diarios/cartera-clientes/cartera-clientes.component';
import { CobranzaComponent } from './cobranza/cobranza.component';
import { PedidosDiaComponent } from './pedidos-dia/pedidos-dia.component';
import { ListaMorosidadComponent } from './lista-morosidad/lista-morosidad.component';
import { PreComisionComponent } from './pre-comision/pre-comision.component';
import { DashBoardSupComponent } from './dash-board-sup/dash-board-sup.component';
import { AsesorVistaComponent } from './asesor-vista/asesor-vista.component';
import { CobroVistaComponent } from './cobro-vista/cobro-vista.component';
import { PedidoVistaComponent } from './pedido-vista/pedido-vista.component';
import { PrecomVistaComponent } from './precom-vista/precom-vista.component';
import { DashBoardAuditoriaComponent } from './dash-board-auditoria/dash-board-auditoria.component';
import { ComisionesComponent } from './comisiones/comisiones.component';
import { TotalComisionesComponent } from './total-comisiones/total-comisiones.component';
import { Zona1AuditoriaComponent } from './zona1-auditoria/zona1-auditoria.component';
import { Zona2AuditoriaComponent } from './zona2-auditoria/zona2-auditoria.component';
import { ZonaEspecialComponent } from './zona-especial/zona-especial.component';
import { EdoCtaComponent } from './edo-cta/edo-cta.component';
import { RepoSurtidoComponent } from './repo-surtido/repo-surtido.component';
import { MovimientosFolioComponent } from './movimientos-folio/movimientos-folio.component';
import { BitacoraComponent } from './bitacora/bitacora/bitacora.component';
import { MostrarInfoBitacoraComponent } from './mostrar-info-bitacora/mostrar-info-bitacora.component';
import { MostrarFacturasMorosidadComponent } from './mostrar-facturas-morosidad/mostrar-facturas-morosidad.component';
import { ChequesDevueltosComponent } from './cheques-devueltos/cheques-devueltos.component';
import { DashboardLogisticaComponent } from './dashboard-logistica/dashboard-logistica.component';
import { BuscarPagosComponent } from './buscar-pagos/buscar-pagos.component';
import { MapaComponent } from './mapa/mapa.component';
import { UsuariosClientesComponent } from './usuarios-clientes/usuarios-clientes.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ComentariosComponent } from '../components/comentarios/comentarios.component';
import { BoardComentariosComponent } from './board-comentarios/board-comentarios.component';
import { RutasGuiasComponent } from './rutas-guias/rutas-guias.component';
import { VerMapaComponent } from './ver-mapa/ver-mapa.component';

const pageRoutes: Routes = [
    {
        path: 'dashboardAdmin',
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        component: DashboardAdminComponent,
        data:   {
                    titulo: 'Dashboard Administración',
                    name: 'description'
                }
    },
    {
        path: 'dashboardDir',
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        component: DashborarDirComponent,
        data:   {
                    titulo: 'Dashboard Dirección',
                    name: 'description'
                }
    },
    {
        path: 'dashboardAse',
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        component: DasboardAseComponent,
        data:   {
                    titulo: 'Dashboard Asesor',
                    name: 'description'
                }
    },
    {
        path: 'dashboard',
        canActivate: [ ClienteGuard, VerificaTokenGuard ],
        component: DashboardComponent,
        data:   {
                    titulo: 'Dashboard',
                    name: 'description'
                }
    },
    {
        path: 'account-settings',
        canActivate: [ VerificaTokenGuard ],
        component: AccountSettingsComponent,
        data:
                {
                    titulo: 'Configuración',
                    name: 'description'
                }
    },
    {
        path: 'perfil',
        canActivate: [ VerificaTokenGuard ],
        component: ProfileComponent,
        data:
                {
                    titulo: 'Perfil de Usuario',
                    name: 'description'
                }
    },
    {
        path: 'busqueda/:termino',
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        component: BusquedaComponent,
        data:
                {
                    titulo: 'Busqueda Completa',
                    name: 'description'
                }
    },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Mantenimiento de Usuarios',
                    name: 'description'
                }
    },
    {
        path: 'clientes',
        component: UsuariosClientesComponent,
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Mantenimiento de Clientes',
                    name: 'description'
                }
    },
    // Asesores
    {
        path: 'cobranza',
        component: CobranzaComponent,
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Cobranza del Día',
                    name: 'description'
                }
    },
    {
        path: 'pedidosDia',
        component: PedidosDiaComponent,
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Pedidos del Día del Asesor',
                    name: 'description'
                }
    },
    {
        path: 'lista-morosidad/:id/:nombre/:inicio/:fin',
        component: ListaMorosidadComponent,
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Relación de Clientes Morosos',
                    name: 'description'
                }
    },
    {
        path: 'pre-comision',
        component: PreComisionComponent,
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Previsualización de la Comisión del Mes',
                    name: 'description'
                }
    },
    {
        path: 'edo-cta',
        component: EdoCtaComponent,
        canActivate: [ GuiasEdoCtaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Estado de Cuenta del Cliente',
                    name: 'description'
                }
    },
    {
        path: 'mov-fol',
        component: MovimientosFolioComponent,
        canActivate: [ AuditoriaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Movimiento Detallado de Folios',
                    name: 'description'
                }
    },
    // Almacen
    {
        path: 'repoSurtido',
        component: RepoSurtidoComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Reporte de Almacén',
                    name: 'description'
                }
    },
    // Auditoria & Cobranza
    {
        path: 'dashBoardAuditoria',
        component: DashBoardAuditoriaComponent,
        canActivate: [ AuditoriaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Dashboard de Auditoria & Cobranza',
                    name: 'description'
                }
    },
    {
        path: 'buscarPagos',
        component: BuscarPagosComponent,
        canActivate: [ AuditoriaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Búsqueda de pagos por rango de fecha',
                    name: 'description'
                }
    },
    // Esto quitarlo
    {
        path: 'zona1Auditoria',
        component: Zona1AuditoriaComponent,
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Información Detallada de Zona 1',
                    name: 'description'
                }
    },
    {
        path: 'zona2Auditoria',
        component: Zona2AuditoriaComponent,
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Información Detallada de Zona 2',
                    name: 'description'
                }
    },
    {
        path: 'zonaEspecial',
        component: ZonaEspecialComponent,
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Información Detallada de Zona Especial',
                    name: 'description'
                }
    },
    // Hasta aquí quitar
    // Comentarios
    {
        path: 'boardComentarios',
        component: BoardComentariosComponent,
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Comentarios de Bitacora',
                    name: 'description'
                }
    },
    {
        path: 'comentarios/:clienteid/:numero/:nombre',
        component: ComentariosComponent,
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Comentarios de Bitacora del cliente',
                    name: 'description'
                }
    },
    // Hasta aquí Comentarios
    {
        path: 'direccionCuentas',
        component: BitacoraComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Dirección de Cuentas',
                    name: 'description'
                }
    },
    {
        path: 'infoBitacora/:data',
        component: MostrarInfoBitacoraComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Información de Clientes Morosos',
                    name: 'description'
                }
    },
    {
        path: 'chequesDevueltos',
        component: ChequesDevueltosComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Cheques Devueltos',
                    name: 'description'
                }
    },
    {
        path: 'infoFacturas/:clienteid/:nombre/:numero/:tipo',
        component: MostrarFacturasMorosidadComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Información a Detalle',
                    name: 'description'
                }
    },
    // Supervisores
    {
        path: 'dashBoardSup',
        component: DashBoardSupComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Dashboard de Supervisión',
                    name: 'description'
                }
    },
    {
        path: 'asesor-vista/:id/:nombre',
        component: AsesorVistaComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Vista del Asesor',
                    name: 'description'
                }
    },
    {
        path: 'cobro-vista/:id/:nombre',
        component: CobroVistaComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Vista del Cobro del Asesor',
                    name: 'description'
                }
    },
    {
        path: 'pedido-vista/:id/:nombre',
        component: PedidoVistaComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Vista de los Pedidos del Asesor',
                    name: 'description'
                }
    },
    {
        path: 'precom-vista/:id/:nombre/:img',
        component: PrecomVistaComponent,
        canActivate: [ SuperGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Vista de la Pre-Comisión del Asesor',
                    name: 'description'
                }
    },
    // Comisiones
    {
        path: 'comisiones',
        component: ComisionesComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Listado de Comisiones Realizadas',
                    name: 'description'
                }
    },
    {
        path: 'totalComisiones',
        component: TotalComisionesComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Totales de Comisiones Realizadas',
                    name: 'description'
                }
    },
    // Diarios
    {
        path: 'dVentas',
        component: VentaComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Diario de Ventas',
                    name: 'description'
                }
    },
    {
        path: 'dCompras',
        component: CompraComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Diario de Compras',
                    name: 'description'
                }
    },
    {
        path: 'utilidades',
        component: UtilidadesComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Utilidades',
                    name: 'description'
                }
    },
    {
        path: 'notCred',
        component: NotasComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Notas de Crédito',
                    name: 'description'
                }
    },
    {
        path: 'dInventario',
        component: InventarioComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Diario de Inventario',
                    name: 'description'
                }
    },
    {
        path: 'backorder',
        component: BackorderComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Back Order',
                    name: 'description'
                }
    },
    {
        path: 'ent-sal',
        component: EntSalComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Entradas & Salidas',
                    name: 'description'
                }
    },
    {
        path: 'dias-lunes',
        component: RepoLunesComponent,
        canActivate: [ AuditoriaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Días Lunes',
                    name: 'description'
                }
    },
    {
        path: 'cProveedores',
        component: CarteraProveedoresComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Cartera de Proveedores',
                    name: 'description'
                }
    },
    {
        path: 'cClientes',
        component: CarteraClientesComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Cartera de Clientes',
                    name: 'description'
                }
    },
    // Logística
    {
        path: 'dashboardGuias',
        component: DashboardLogisticaComponent,
        canActivate: [ MesaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Generación de Guías',
                    name: 'description'
                }
    },
    {
        path: 'rutasGuias',
        component: RutasGuiasComponent,
        canActivate: [ GuiasEdoCtaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Generación de Guías',
                    name: 'description'
                }
    },
    {
        path: 'verMapa/:guia',
        component: VerMapaComponent,
        canActivate: [ GuiasEdoCtaGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Generación de Guías',
                    name: 'description'
                }
    },
    {
        path: 'mapas',
        component: MapaComponent,
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        data:
                {
                    titulo: 'Geolocalización',
                    name: 'description'
                }
    },
    // Redirección
    {
        path: '',
        canActivate: [ AdminGuard, VerificaTokenGuard ],
        redirectTo: '/dashboardAdmin',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [ DireccionGuard, VerificaTokenGuard ],
        redirectTo: '/dashboardDir',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [ AsesoresGuard, VerificaTokenGuard ],
        redirectTo: '/dashboardAse',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [ MesaGuard, VerificaTokenGuard ],
        redirectTo: '/dashboardGuias',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [ ClienteGuard, VerificaTokenGuard ],
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pageRoutes );
