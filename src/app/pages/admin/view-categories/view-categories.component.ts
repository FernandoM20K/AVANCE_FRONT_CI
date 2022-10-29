import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/categories/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categorias:any = [

  ]

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar las Categorias','error');
      }
    )
  }
}
