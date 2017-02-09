import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../service/mock-heroes';
import { AgmCoreModule } from 'angular2-google-maps/core';
@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})

export class SimpleFormComponent implements OnInit {
  public submitted = false;
  public selectedMovie = new Movie(1, 'Rings', ['sanfransisco'], null, 37.7749, -122.4194);

  @Input() movieCollection: Movie[] = [this.selectedMovie];
  constructor(private movieService: MovieService) {
    // this.movieCollection = [this.selectedMovie];
    console.log(this.movieCollection);
  }

  public onSubmit(e) {
    this.submitted = true;
  }

  public selectMovie(movieId) {
    this.selectedMovie = this.movieCollection[movieId];
    console.log(this.selectedMovie);
  }

  public selectLocation(location) {
    console.log(location, this);
  }

  public submit() {
    console.log('form');
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(res => {
      this.movieCollection = res;
    });
    // this.select.emit(this.selectedMovie);
  }
}
