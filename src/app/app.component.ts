import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Empleados } from './models/empleados.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Empleados Universidad de Manizales';
  search: string = '';
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    lenguajes_programacion: new FormControl('', [Validators.required]),
    anios_experiencia: new FormControl('', [Validators.required]),
  });

  usuarios: any[] = [
    {
      id: 1,
      nombre: 'Juan Sebastián Zapata',
      edad: 25,
      lenguajes_programacion: ['Python', 'php', 'Ruby', 'Go'],
      anios_experiencia: 3,
    },
    {
      id: 2,
      nombre: 'Daniela Salazar',
      edad: 27,
      lenguajes_programacion: ['Angular', 'php'],
      anios_experiencia: 5,
    },
    {
      id: 3,
      nombre: 'Santiago Gómez',
      edad: 18,
      lenguajes_programacion: ['Angular', 'Go', 'Ruby', 'Nodejs'],
      anios_experiencia: 7,
    },
    {
      id: 4,
      nombre: 'Camilo Salazar',
      edad: 30,
      lenguajes_programacion: ['Angular', 'Go', 'Ruby', 'Nodejs'],
      anios_experiencia: 1,
    },
  ];

  nuevoEmpleado: Empleados = new Empleados();
  ngOnInit(): void {}
  crearEmpleado() {
    if (!this.form.invalid) {
      const user = this.form.getRawValue();
      const userData = {
        id: 5,
        nombre: user.nombre,
        edad: user.edad,
        lenguajes_programacion: [user.lenguajes_programacion],
        anios_experiencia: user.anios_experiencia,
      };
      this.usuarios.push(userData);
      this.form.reset();
    }
  }

  searchInput() {
    const search = this.search.toLowerCase();
    const res = this.usuarios.filter((usr) => {
      const name = usr.nombre.toLowerCase();
      return name.includes(search);
    });
    this.usuarios = res;
  }

  deleteElement(user: any, index: number) {
    console.log(user);
    console.log(index);
    this.usuarios.splice(index, 1);

    /*
    const  res = this.usuarios.map(usr => {
      if()
    })
    */
  }

  empleadoBuscado: Empleados = new Empleados();

  /*
  buscarEmpleado(){
  const empleadoBuscado = usuarios.filter(usuario => usuario.nombre === this.empleadoBuscado.nombre);
  return(empleadoBuscado)
  }
  */
}
