import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewProductsComponent } from './pages/admin/view-products/view-products.component';
import { ViewTurnComponent } from './pages/admin/view-turn/view-turn.component';

const routes: Routes = [
  {
    path : 'admin',
    component : DashboardComponent,
    children : [
      {
        path : 'categorias',
        component : ViewCategoriesComponent
      },
      {
        path : 'add-categoria',
        component : AddCategoryComponent
      },
      {
        path : 'productos',
        component : ViewProductsComponent
      },
      {
        path : 'add-producto',
        component : AddProductComponent
      },
      {
        path : 'turnos',
        component : ViewTurnComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
