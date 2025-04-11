import { Component } from '@angular/core';
import { GithubComponent } from '../../icons/github/github.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GithubComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects : {nombre:string, descripcion:string, imagen:string, repository:string} []=[
    {
      nombre:'E-commerce muebleria',
      descripcion:'Desarrollo de E-commerce utilizando Angular, Spring Boot y mySQL para la persistencia de datos. Incluye integración con Mercado Pago para pagos virtuales.',
      imagen:'images/muebleriaFoto.png',
      repository:'https://github.com/maikito12/muebleriaProyecto'

    },
    {
      nombre:'Control de Stock Vivero',
      descripcion:'Desarrollo de aplicación de escritorio realizada en Java, con interfaz gráfica realizada en Swing. Se utilizó archivos JSON para lograr persistencia.',
      imagen:'images/vivero.png',
      repository:'https://github.com/matias-coluccio/proyecto-vivero'
    }
  ]

}
