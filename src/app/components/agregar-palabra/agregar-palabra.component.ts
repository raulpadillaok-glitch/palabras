import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-palabra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-palabra.component.html',
  styleUrl: './agregar-palabra.component.scss'
})
export class AgregarPalabraComponent implements OnChanges {
  nuevaPalabra : string = '';
  indiceEdicion: number | null = null;
  modoEdicion: boolean = false;

  @Input() palabraParaEditar: {index: number, palabra: string} | null = null;
  @Output() palabraAgregada : EventEmitter<string> = new EventEmitter<string>();
  @Output() palabraActualizada : EventEmitter<{index: number, palabra: string}> = new EventEmitter<{index: number, palabra: string}>();
  @Output() edicionCancelada : EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['palabraParaEditar']) {
      if (this.palabraParaEditar) {
        this.nuevaPalabra = this.palabraParaEditar.palabra;
        this.indiceEdicion = this.palabraParaEditar.index;
        this.modoEdicion = true;
      } else {
        this.cancelarEdicion();
      }
    }
  }

  agregarPalabras() {
    if(this.nuevaPalabra.trim() !== '') {
      if (this.modoEdicion && this.indiceEdicion !== null) {
        this.palabraActualizada.emit({index: this.indiceEdicion, palabra: this.nuevaPalabra.trim()});
        this.cancelarEdicion();
      } else {
        this.palabraAgregada.emit(this.nuevaPalabra.trim());
        this.nuevaPalabra = '';
      }
    }
  }

  cancelarEdicion() {
    this.nuevaPalabra = '';
    this.indiceEdicion = null;
    this.modoEdicion = false;
    this.edicionCancelada.emit();
  }
}
