import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

// Servicios
import {
  SettingsService,
  SidebarService,
  UsuarioService,
  LoginGuardGuard,
  VerificaTokenGuard,
  AdminGuard,
  SuperGuard,
  AsesoresGuard,
  ClienteGuard,
  DireccionGuard,
  AuditoriaGuard,
  MesaGuard,
  SubirArchivoService,
  PhpService,
  DiariosService,
  AsesoresService,
  SupervisoresService,
  ComisionesService,
  ClientesService,
  WebsocketService,
  AlmacenService,
  ExcelService,
  CreditoService,
  GuiasService,
  GpsService,
  ClienteService,
  GuiasEdoCtaGuard,
  ChoferesService,
  MagnitrackingService,
  TiendaService,
  PedidosService,
  NcService,
  BackorderService,
  HerramientasService,
  OficinaService,
  CobradorService,
  VisitasClientesService,
  PaneldiariosService,
  ScrumService,
  ActividadesService,
  DiferenciasService,
  GoogleService,
  PedidoService,
  MensajesContactoService,
  PanelasesoresService,
  GarantiasService,
  ProductosService,
  PedFacturadosService,
  DiasvtasService,
  ChoferService,
  ChequesdevService,
  ProveedoresService
  // NotificationService
} from "./services.index";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    // Guardias
    LoginGuardGuard,
    VerificaTokenGuard,
    AdminGuard,
    SuperGuard,
    AsesoresGuard,
    ClienteGuard,
    DireccionGuard,
    AuditoriaGuard,
    MesaGuard,
    GuiasEdoCtaGuard,
    // Servicios
    SettingsService,
    SidebarService,
    UsuarioService,
    SubirArchivoService,
    ModalUploadService,
    PhpService,
    DiariosService,
    AsesoresService,
    SupervisoresService,
    ComisionesService,
    ClientesService,
    WebsocketService,
    AlmacenService,
    ExcelService,
    CreditoService,
    GuiasService,
    GpsService,
    ClienteService,
    ChoferesService,
    TiendaService,
    PedidosService,
    NcService,
    BackorderService,
    HerramientasService,
    OficinaService,
    CobradorService,
    VisitasClientesService,
    PaneldiariosService,
    ScrumService,
    ActividadesService,
    DiferenciasService,
    GoogleService,
    PedidoService,
    MensajesContactoService,
    PanelasesoresService,
    GarantiasService,
    ProductosService,
    PedFacturadosService,
    DiasvtasService,
    ChoferService,
    ChequesdevService,
    ProveedoresService
    // Notificaciones
    // NotificationService
    // Magnitracking
    // MagnitrackingService
  ],
  declarations: []
})
export class ServiceModule { }
