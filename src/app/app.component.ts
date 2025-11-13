import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarPalabraComponent } from './components/agregar-palabra/agregar-palabra.component';
import { ListaPalabrasComponent } from './components/lista-palabras/lista-palabras.component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            FormsModule, 
            AgregarPalabraComponent,
            ListaPalabrasComponent
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listaPalabras: string[] = [];
  palabraParaEditar: {index: number, palabra: string} | null = null;

  agregarPalabraALista(palabra: string) :void {
    this.listaPalabras.push(palabra);
  }

  eliminarPalabraDeLista(index: number) :void {
    this.listaPalabras.splice(index, 1);
    this.palabraParaEditar = null;
  }

  actualizarPalabraEnLista(datos: {index: number, palabra: string}) :void {
    this.listaPalabras[datos.index] = datos.palabra;
    this.palabraParaEditar = null;
  }

  prepararEdicion(datos: {index: number, palabra: string}) :void {
    this.palabraParaEditar = datos;
  }
}
