import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  public contador: number = 0;
  public showButton: boolean= true;
  public nombres: string[]= ['Juan', 'Roberto','Carlos', 'Maria', 'Carla'];

  public incrementa(cantidad: number = 1): void {
    this.contador += cantidad;
  }

  public decrementa(cantidad: number = 1): void {
    this.contador -= cantidad;
  }

}
