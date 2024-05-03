import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

  constructor(private TvShowsService : TvShowsService){
  }
  public searchTerm : string =""; 
  public titleInput : string = ""; 
  public yearInput : number =0; 
  public episodesInput : number =0; 
  public imageInput : string =""; 
  public idInput : number =0; 
  public logs : string =""; 

  public onClickSetAll ( ):void{
    this.TvShowsService.setAllAs(true);
  };

  public onClickUnsetAll ():void{
    console.log("Click en deseleccionar todos");
    this.TvShowsService.setAllAs(false);
  };

  public onClickChangeOrder():void{
    this.TvShowsService.onClickChangeOrder();
  }

  public onClickSearch(): void{
    this.TvShowsService.searchByTerm(this.searchTerm);
  }

  public onClickAdd(): void{
    if (!this.idInput || !this.titleInput || !this.episodesInput) {
      console.log("ID, título y número de episodios son campos obligatorios");
      this.logs="ID, título y número de episodios son campos obligatorios";
      return;
    }

    this.TvShowsService.onClickAdd(this.titleInput, this.yearInput, this.episodesInput, this.imageInput, this.idInput);
  }

}
