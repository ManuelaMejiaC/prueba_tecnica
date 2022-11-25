import {Component} from '@angular/core';
import { Subject } from 'rxjs';
import { Empleados } from './models/empleados.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Empleados Universidad de Manizales';

  usuarios: Empleados[] = [
    {
        id: 1,
        nombre: "Juan Sebastián Zapata",
        edad: 25,
        lenguajes_programacion: ["Python", "php", "Ruby", "Go"],
        anios_experiencia: 3
    },
    {
        id: 2,
        nombre: "Daniela Salazar",
        edad: 27,
        lenguajes_programacion: ["Angular", "php"],
        anios_experiencia: 5
    },
    {
        id: 3,
        nombre: "Santiago Gómez",
        edad: 18,
        lenguajes_programacion: ["Angular", "Go", "Ruby", "Nodejs"],
        anios_experiencia: 7
    },
    {
        id: 4,
        nombre: "Camilo Salazar",
        edad: 30,
        lenguajes_programacion: ["Angular", "Go", "Ruby", "Nodejs"],
        anios_experiencia: 1
      }
    ];

  nuevoEmpleado: Empleados = new Empleados();

  crearEmpleado(){
    this.nuevoEmpleado.id = this.usuarios.length + 1;
    this.usuarios.push(this.nuevoEmpleado);

    this.nuevoEmpleado = new Empleados();
  }

  empleadoBuscado: Empleados = new Empleados();


  buscarEmpleado(){
  const empleadoBuscado = usuarios.filter(usuario => usuario.nombre === this.empleadoBuscado.nombre);
  return(empleadoBuscado)
  }
}
