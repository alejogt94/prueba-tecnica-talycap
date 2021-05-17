import { ClimaService } from './../../services/clima.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-clima',
  templateUrl: './consultar-clima.component.html',
  styleUrls: ['./consultar-clima.component.css'],
})
export class ConsultarClimaComponent implements OnInit {
  listaClima: any[] = [];
  climaEditar: any[] = [];
  agregarActivo: boolean = false;

  constructor(private _ClimaServicio: ClimaService) {}

  ngOnInit(): void {
    this.consultarClima();
  }

  eliminarClima(clima: any) {
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._ClimaServicio.deleteClima(clima.id).subscribe((data) => {
          Swal.fire('Clima eliminado', '', 'success');
          this.consultarClima();
        });
      }
    });
  }

  consultarClima() {
    this._ClimaServicio.getClima().subscribe((data) => {
      this.listaClima = data;
    });
  }

  editarClima(clima: any) {
    this.climaEditar = clima;
    this.agregarActivo = false;
  }

  agregarClima() {
    this.agregarActivo = true;
    this.climaEditar = [];
  }
}
