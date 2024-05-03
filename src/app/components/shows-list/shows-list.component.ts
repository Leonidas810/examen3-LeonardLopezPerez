import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [NgFor, NgIf, ShowComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {
  
  @Input()
  public tvShows: Show[] = []
  
}
