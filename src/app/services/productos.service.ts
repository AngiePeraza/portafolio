import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando_productos: boolean: false;

  constructor( private http: Http ) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargar_productos = true;
    if (this.productos.length === 0) {
      this.http.get("https://paginaweb-b2048.firebaseio.com/productos_idx.json")
          .subscribe( res => {
            console.log( res.json() );
            this.cargando_productos = false;
          });
    }
  }

}
