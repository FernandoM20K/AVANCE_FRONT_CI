import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private htpp:HttpClient) { }

  public listarProductos() {
    return this.htpp.get(`${baserUrl}/producto/`);
  }

  public agregarProducto(producto:any) {
    return this.htpp.post(`${baserUrl}/producto/`,producto);
  }

  public eliminarProducto(productoId:any) {
    return this.htpp.delete(`${baserUrl}/producto/${productoId}`);
  }

  public obtenerProducto(productoId:any) {
    return this.htpp.get(`${baserUrl}/producto/${productoId}`);
  }

  public actualizarProducto(producto:any) {
    return this.htpp.put(`${baserUrl}/producto/`,producto);
  }
}
