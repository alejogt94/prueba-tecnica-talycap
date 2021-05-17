import { AgregarClimaService } from './../../services/agregar-clima.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-clima',
  templateUrl: './agregar-clima.component.html',
  styleUrls: ['./agregar-clima.component.css'],
})
export class AgregarClimaComponent implements OnInit {
  @Input()
  climaEditar: any;
  @Input()
  modoAgregar: any;
  @Output() propagar = new EventEmitter<any>();

  listaCiudades: any[] = [];
  listaCielo: any[] = [];
  hola: any;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _AgregarClimaServicio: AgregarClimaService
  ) {
    this.form = this.fb.group({
      ciudad: ['', Validators.required],
      temperatura: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(2),
        ],
      ],
      cielo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerCiudades();
    this.obtenerCielo();
  }
  ngOnChanges() {
    if (this.modoAgregar == true && this.climaEditar == null) {
      this.form.reset();
      this.modoAgregar = false;
    }
    if (this.climaEditar != null) {
      this.form.patchValue({
        ciudad: this.climaEditar.ciudad,
        temperatura: this.climaEditar.temperatura,
        cielo: this.climaEditar.tipoCielo,
      });
    }
  }
  obtenerCiudades() {
    this._AgregarClimaServicio.getCiudades().subscribe(
      (data) => {
        this.listaCiudades = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerCielo() {
    this._AgregarClimaServicio.getCielo().subscribe(
      (data) => {
        this.listaCielo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //agregar o editar clima
  agregarClima() {
    if (this.modoAgregar == false) {
      const clima: any = {
        id: this.climaEditar.id,
        ciudad: this.form.get('ciudad')?.value,
        TipoCIelo: this.form.get('cielo')?.value,
        temperatura: this.form.get('temperatura')?.value,
      };
      this._AgregarClimaServicio
        .updateClima(this.climaEditar.id, clima)
        .subscribe(
          (data) => {
            Swal.fire('Clima editado', '', 'success');
            this.propagar.emit();
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      const clima: any = {
        ciudad: this.form.get('ciudad')?.value,
        TipoCIelo: this.form.get('cielo')?.value,
        temperatura: this.form.get('temperatura')?.value,
      };
      this._AgregarClimaServicio.saveClima(clima).subscribe(
        (data) => {
          Swal.fire('Clima guardado', '', 'success');
          this.form.reset();
          this.propagar.emit();
        },
        (error) => {
          Swal.fire(
            'Hubo un problema al guardar',
            'Te faltan datos por llenar',
            'error'
          );
        }
      );
    }
  }

  editarClima() {
    const clima: any = {
      ciudad: this.form.get('ciudad')?.value,
      TipoCIelo: this.form.get('cielo')?.value,
      temperatura: this.form.get('temperatura')?.value,
    };
  }
}
