import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-palabras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-palabras.component.html',
  styleUrl: './lista-palabras.component.scss'
})
export class ListaPalabrasComponent {
  @Input() palabras : string[] = [];
  @Output() palabraEliminada : EventEmitter<number> = new EventEmitter<number>();
  @Output() palabraAEditar : EventEmitter<{index: number, palabra: string}> = new EventEmitter<{index: number, palabra: string}>();

  eliminarPalabra(index: number) {
    this.palabraEliminada.emit(index);
  }

  editarPalabra(index: number, palabra: string) {
    this.palabraAEditar.emit({index, palabra});
  }
}
