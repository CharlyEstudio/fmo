export class Guia {
    constructor(
        public folio: string,
        public facturas: Array<any>,
        public especiales: Array<any>,
        public verifico: string,
        public cantidad: number,
        public importe: number,
        public cajas: string,
        public fecha: string,
        public hora: string,
        public clientes: number,
        public pdf: string,
        public _id?: string
    ) { }
}
