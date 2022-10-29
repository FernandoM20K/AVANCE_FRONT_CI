import { Component, OnInit } from '@angular/core';
import { TurnsService } from 'src/app/services/turns/turns.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-turn',
  templateUrl: './view-turn.component.html',
  styleUrls: ['./view-turn.component.css']
})
export class ViewTurnComponent implements OnInit {

  turnos:any = [

  ]

  constructor(private turnService:TurnsService) { }

  ngOnInit(): void {
    this.turnService.listarTurnos().subscribe(
      (dato:any) => {
        this.turnos = dato;
        console.log(this.turnos);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los turnos','error');
      }
    )
  }
}
