import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.css']
})
export class AboutPage {
  constructor(private tvShowsService: TvShowsService) {}

  get contador(): number {
    return this.tvShowsService.contador;
  }

  onClick(): void {
    this.tvShowsService.decrementa();
  }
}
