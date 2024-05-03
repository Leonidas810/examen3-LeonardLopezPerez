import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css']
})

export class ContactPage {
  constructor(private tvShowsService: TvShowsService) {}

  get contador(): number {
    return this.tvShowsService.contador;
  }

  onClick(): void {
    this.tvShowsService.incrementa();
  }
}
