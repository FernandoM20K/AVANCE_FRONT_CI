import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productos:any = [

  ]

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.listarProductos().subscribe(
      (dato:any) => {
        this.productos = dato;
        console.log(this.productos);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Erro al cargar los productos','error');
      }
    )
  }

  eliminarProducto(productoId:any) {
    Swal.fire({
      title:'Eliminar Producto',
      text:'¿Estas Seguro de Eliminar el producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.productService.eliminarProducto(productoId).subscribe(
          (data:any) => {
            this.productos = this.productos.filter((producto:any) => producto.examenId != productoId);
            Swal.fire('Producto Eliminado','El producto ha sido eliminado con exito','success');
          }, (error) => {
            Swal.fire('Error !!','Error al eliminar el producto','error')
          }
        );
      }
    })
  }
}
