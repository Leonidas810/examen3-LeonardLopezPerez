import { Component } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { TvShowsService } from '../../services/tv-shows.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(private tvShowsService: TvShowsService) { }

  get show(): Show {
    return this.tvShowsService.show;
  }

}
