import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, Routes } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MovieService } from './service/movies/movie.service';
import { QuestionService } from './service/question/question.service';

import { Number2Alphabet } from './pipes/number2alphabet';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';

import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { NotFoundComponent } from './components/pageNotFound/not-found.component';
import { JiffleNowComponent } from './components/jiffleNow/jiffle-now.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SimpleFormComponent,
    JiffleNowComponent,
    Number2Alphabet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAy594QIrU6l8d8eQ3cluMxioYiHODqQvg'
    }),
    NgbModule.forRoot()
  ],
  providers: [MovieService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
