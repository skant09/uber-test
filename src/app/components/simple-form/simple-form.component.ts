import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})

export class SimpleFormComponent implements OnInit {

  model = {
    city: 'sanfrasisco',
    movie: 'Rings',
    lat: 37.7749,
    lng: -122.4194
  };
  submitted = false;

  constructor(private movieService: MovieService) {
  }

  onSubmit(e) {
    console.log('submitted');
    this.movieService.getHeroes().subscribe(res => console.log(res));
    this.submitted = true;
  }

  submit() {
    console.log('form');
  }

  ngOnInit() {
    console.log('init');
  }

}
