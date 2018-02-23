import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  item: any = undefined;
  cod: string = undefined;

  constructor( private route: ActivatedRoute,
               private _ps: ProductosService ) {
    route.params.subscribe( parametros => {
      _ps.cargar_producto( parametros['id'] )
         .subscribe( res => {
           this.cod = parametros['id'];
           this.item = res.json();
         });
    });
  }

}
