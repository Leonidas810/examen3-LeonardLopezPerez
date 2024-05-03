import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {
  public imgSrc : string = "https://picsum.photos/300/300";
  public imgAlt : string =  "Esta es una imagen de prueba";
}
