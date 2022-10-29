import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categories/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoria = {
    nombre : '',
  }

  constructor(private categoryService:CategoryService, private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.categoria.nombre.trim() == '' || this.categoria.nombre == null) {
      this.snack.open("El Nombre de la Categoria es requerido !!",'',{
        duration:300
      });
      return;
    }

    this.categoryService.agregarCategoria(this.categoria).subscribe(
      (dato:any) => {
        this.categoria.nombre = '';
        Swal.fire('Categoria Agregada','La categoria ha sido agregada con exito','success');
        this.router.navigate(['/admin/categorias']);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoria','error')
      }
    )
  }
}
