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
    lat: 51.678418,
    lng: 7.809007
  };
  submitted = false;

  constructor() { }

  onSubmit(e) {
    const movie = new MovieService();
    console.log('submitted', this.model, movie.getHeroes());
    this.submitted = true;
  }

  submit() {
    console.log('form');
  }

  ngOnInit() {
    console.log('init');
  }

}
