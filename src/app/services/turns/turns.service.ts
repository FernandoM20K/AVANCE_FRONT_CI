import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  constructor(private http:HttpClient) { }

  public listarTurnos() {
    return this.http.get(`${baserUrl}/turno/`);
  }
}
