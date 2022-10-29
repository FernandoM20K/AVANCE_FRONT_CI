import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoryService } from 'src/app/services/categories/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categorias:any = [

  ];

  producto = {
    nombre : '',
    descripcion : '',
    stock : '',
    categoria : {
      categoriaId: ''
    }
  }

  constructor(private categoryService:CategoryService, private snack:MatSnackBar, private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
        console.log(this.categorias);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar las Categorias','error');
      }
    )
  }

  guardarProducto() {
    console.log(this.producto);
    if(this.producto.nombre.trim() == '' || this.producto.nombre == null) {
      this.snack.open('El Nombre del producto es requerido','',{
        duration:3000
      });
      return;
    }

    this.productService.agregarProducto(this.producto).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Producto Guardado','El producto ha sido guardado con exito','success');
        this.producto = {
          nombre : '',
          descripcion : '',
          stock : '',
          categoria : {
            categoriaId: ''
          }
        }
        this.router.navigate(['/admin/productos']);
      }, (error) => {
        Swal.fire('Error !!','Error al guardar el Producto','error');
      }
    )
  }
}
