import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  public contador: number = 1000;

  public tvShows: Show[] = []

  public tvShows2: Show[] = this.tvShows

  public _id: number= 0;

  public show: Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: '',
    year: 0
  };

  constructor(private http: HttpClient) { }
  public delete(value: number): void {
    console.log("Click en eliminar tarjeta desde el servicio");
    this.tvShows.splice(value, 1);
  }

  public searchByTerm(value: string) {
    this.fetchTvShows(value);
  }

  public incrementa(): void {
    this.contador++;
  }

  public decrementa(): void {
    this.contador--;
  }

  public setAllAs(value: boolean): void {
    this.tvShows.forEach(item => item.isSelected = value);
    console.log("Accion desde el servicio");
  }

  public onClickChangeOrder(): void {
    console.log("Se invierten tarjetas desde el servicio");
    this.tvShows.reverse();

  } private apiUrl = 'http://localhost:8080/api/tvshows';


  public onClickShowInfo(id: number): void {
    this.getTvShowById(id).subscribe({
      next: (response: any) => {
        this.show.title = response.result.title;
        this.show.image = response.result.image;
        this.show.episodes = response.result.episodes;
        this.show.year = response.result.year; 
        this.show.id = response.result.id;
        console.log(response.result.id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  public getTvShowById(id: number) {
    return this.http.get<Show>(`${this.apiUrl}/${id}`);
  }

  public fetchTvShows(searchTerm = ""): void {
    this.http.get("http://localhost:8080/api/tvshows?searchTerm=" + searchTerm).subscribe({
      next: (response: any) => {
        this.tvShows = response.result;
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }

  public onClickDelete(id: number): void {
    this.deleteTvShow(id).subscribe({
      next: () => {
        console.log("Show deleted successfully");
        window.location.reload();
      },
      error: (error) => {
        console.log("Error deleting show:", error);
      }
    });
  }

  public deleteTvShow(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/tvshows/${id}`);
  }

  public onClickAdd(title:string, year:number, episodes:number, image: string, id: number): void{
    const existingShow = this.tvShows.find(show => show.id === id);
    if (existingShow) {
      console.log("Ya existe un show con ese ID");
      return;
    }
  
    const newShow: Show = {
      title,
      year,
      episodes,
      image,
      id};

      this.tvShows.push(newShow);

      this.http.post<void>(this.apiUrl, newShow).subscribe({
        next: () => {
          console.log("Show added successfully");
          window.location.reload();
        },
        error: (error) => {
          console.log("Error adding show:", error);
        }
      });
  }


    public onClickEdit(title: string, year: number, episodes: number, image: string, id: number): void {
      const existingShow = this.tvShows.find(show => show.id === id);
      if (!existingShow) {
        console.log("No existe un show con ese ID");
        return;
      }
  
      existingShow.title = title;
      existingShow.year = year;
      existingShow.episodes = episodes;
      existingShow.image = image;
  
      this.http.put<void>(`${this.apiUrl}/${id}`, { title, year, episodes, image }).subscribe({
        next: () => {
          console.log("Show updated successfully");
        },
        error: (error) => {
          console.log("Error updating show:", error);
        }
      });
    }
}