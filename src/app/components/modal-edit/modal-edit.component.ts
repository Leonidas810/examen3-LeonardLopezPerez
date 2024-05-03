import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';
import { Show } from '../../interfaces/show.interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.css'
})
export class ModalEditComponent {
  constructor(private TvShowsService: TvShowsService) { }

  public titleInput: string = "";
  public yearInput: number = 0;
  public episodesInput: number = 0;
  public imageInput: string = "";
  public idInput: number = 0;
  public logs: string = "";

  ngOnInit() {
    this.updateInputs();
  }

  private updateInputs() {
    const show = this.TvShowsService.show;
    if (show) {
      this.titleInput = show.title;
      this.yearInput = show.year;
      this.episodesInput = show.episodes;
      this.imageInput = show.image;
      this.idInput = show.id;
    }
  }

  get show(): Show {
    return this.TvShowsService.show;
  }

  public onClickEdit(): void {
    console.log(this.titleInput );
    if (!this.idInput || !this.titleInput || !this.episodesInput) {
      console.log("ID, título y número de episodios son campos obligatorios");
      this.logs = "ID, título y número de episodios son campos obligatorios";
      return;
    }

    this.TvShowsService.onClickEdit(this.titleInput, this.yearInput, this.episodesInput, this.imageInput, this.idInput);
  }

}
