import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categories/category.service';
import { ProductsService } from 'src/app/services/products/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upgrade-product',
  templateUrl: './upgrade-product.component.html',
  styleUrls: ['./upgrade-product.component.css']
})
export class UpgradeProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private categoryService: CategoryService,
    private router:Router
  ) { }

  productoId = 0;
  producto: any;
  categorias:any;

  ngOnInit(): void {
    this.productoId = this.route.snapshot.params['productoId'];
    this.productService.obtenerProducto(this.productoId).subscribe(
      (data) => {
        this.producto = data;
        console.log(this.producto);
      },
      (error) => {
        console.log(error);
      }
    );

    this.categoryService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
      }, (error) => {
        console.log(error)
      }
    );
  }

  public actualizarProductos() {
    this.productService.actualizarProducto(this.producto).subscribe(
      (data) => {
        Swal.fire('Producto Actualizado','El producto ha sido actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/productos']);
          }
        );
      }, (error) => {
        Swal.fire('Error !!','No se ha podido actualizar el producto','error');
        console.log(error);
      }
    )
  }
}
