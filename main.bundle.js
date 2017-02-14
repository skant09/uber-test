webpackJsonp([1,4],{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie(id, name, location, author, lat, lng) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.author = author;
        this.lat = lat;
        this.lng = lng;
    }
    return Movie;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/mock-heroes.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mock_heroes__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.movieUrl = 'https://data.sfgov.org/OData.svc/yitu-d5am';
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.movieUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MovieService.prototype.extractData = function (res) {
        var parser = new DOMParser();
        var body = parser.parseFromString(res.text(), 'application/xml');
        var entries = body.querySelectorAll('entry properties');
        var movies = [];
        for (var i = 0; i < entries.length; i++) {
            var movie = entries[i].getElementsByTagName('title')[0].innerHTML;
            var author = entries[i].getElementsByTagName('writer')[0].innerHTML;
            var location = entries[i].getElementsByTagName('locations')[0].innerHTML;
            location = location ? location : 'NA';
            var length = Math.max(movies.length - 1, 0);
            if (movies[length] && movie === movies[length].name) {
                movies[length]['location'].push(location);
            }
            else {
                movies.push(new __WEBPACK_IMPORTED_MODULE_5__mock_heroes__["a" /* Movie */](i, movie, [location], author, 37.7749, -122.4195));
            }
        }
        return movies;
    };
    MovieService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    MovieService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], MovieService);
    return MovieService;
    var _a;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/movie.service.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.questionUrl = 'https://cdn.rawgit.com/';
        this.questionUrl += 'santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json';
    }
    QuestionService.prototype.getQuestions = function () {
        return this.http.get(this.questionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.extractData = function (res) {
        var questions = res.json();
        questions.forEach(function (q, i) { return q.id = i; });
        return questions;
    };
    QuestionService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    QuestionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], QuestionService);
    return QuestionService;
    var _a;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/question.service.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 437;


/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(548);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/suryakant/github/uber-test/src/main.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My first angular2 project';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(715),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/app.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_movies_movie_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_question_question_service__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_number2alphabet__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_simple_form_simple_form_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_pageNotFound_not_found_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_jiffleNow_jiffle_now_component__ = __webpack_require__(549);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_pageNotFound_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_simple_form_simple_form_component__["a" /* SimpleFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_jiffleNow_jiffle_now_component__["a" /* JiffleNowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_number2alphabet__["a" /* Number2Alphabet */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                // AppRoutingModule,
                __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAy594QIrU6l8d8eQ3cluMxioYiHODqQvg'
                }),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_movies_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_6__service_question_question_service__["a" /* QuestionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_question_question_service__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JiffleNowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JiffleNowComponent = (function () {
    //  = [this.selectedQuestion];
    function JiffleNowComponent(questionService) {
        this.questionService = questionService;
        this.submit = false;
    }
    JiffleNowComponent.prototype.selectAnswer = function (value) {
        console.log(value);
        this.selectedQuestion.answerSubmitted = value;
        if (this.selectedQuestion.id === this.questionCollection.length) {
            return this.submit = true;
        }
        this.selectedQuestion = this.questionCollection[this.selectedQuestion.id++];
    };
    JiffleNowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (res) {
            console.log(res);
            _this.questionCollection = res;
            _this.selectedQuestion = _this.questionCollection[0];
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], JiffleNowComponent.prototype, "questionCollection", void 0);
    JiffleNowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jiffle-now',
            template: __webpack_require__(716),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_question_question_service__["a" /* QuestionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_question_question_service__["a" /* QuestionService */]) === 'function' && _a) || Object])
    ], JiffleNowComponent);
    return JiffleNowComponent;
    var _a;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/jiffle-now.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: '<h1>404 not found</h1>',
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/not-found.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_movies_movie_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_movies_mock_heroes__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleFormComponent = (function () {
    function SimpleFormComponent(movieService) {
        this.movieService = movieService;
        this.submitted = false;
        this.selectedMovie = new __WEBPACK_IMPORTED_MODULE_2__service_movies_mock_heroes__["a" /* Movie */](1, 'Rings', ['sanfransisco'], null, 37.7749, -122.4194);
        this.movieCollection = [this.selectedMovie];
        // this.movieCollection = [this.selectedMovie];
        console.log(this.movieCollection);
    }
    SimpleFormComponent.prototype.onSubmit = function (e) {
        this.submitted = true;
    };
    SimpleFormComponent.prototype.selectMovie = function (movieId) {
        this.selectedMovie = this.movieCollection[movieId];
        console.log(this.selectedMovie);
    };
    SimpleFormComponent.prototype.selectLocation = function (location) {
        console.log(location, this);
    };
    SimpleFormComponent.prototype.submit = function () {
        console.log('form');
    };
    SimpleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (res) {
            _this.movieCollection = res;
        });
        console.log('simple form');
        // this.select.emit(this.selectedMovie);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SimpleFormComponent.prototype, "movieCollection", void 0);
    SimpleFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-form',
            template: __webpack_require__(717),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_movies_movie_service__["a" /* MovieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_movies_movie_service__["a" /* MovieService */]) === 'function' && _a) || Object])
    ], SimpleFormComponent);
    return SimpleFormComponent;
    var _a;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/simple-form.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Number2Alphabet; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Number2Alphabet = (function () {
    function Number2Alphabet() {
    }
    Number2Alphabet.prototype.transform = function (value) {
        var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return string[value];
    };
    Number2Alphabet = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'number2Alphabet' }), 
        __metadata('design:paramtypes', [])
    ], Number2Alphabet);
    return Number2Alphabet;
}());
//# sourceMappingURL=/home/suryakant/github/uber-test/src/number2alphabet.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/home/suryakant/github/uber-test/src/environment.js.map

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\n  height: 300px;\n  width: 80%;\n  text-align: center; }\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ".jiffle {\n  background-image: url(\"/public/assets/screenshot.jpg\"); }\n  .jiffle .answer {\n    text-align: center; }\n    .jiffle .answer span {\n      display: inline-block;\n      border: 1px solid #333;\n      min-width: 15%; }\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\n  height: 300px;\n  width: 80%;\n  float: right; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/main\" routerLinkActive=\"active\">Main</a>\n  <a routerLink=\"/jiffleNow\" routerLinkActive=\"active\">Jiffle Now</a>\n  <a routerLink=\"/uber\" routerLinkActive=\"active\">Uber</a>\n</nav>\n<h1 class=\"col-sm-12 text-center\">\n  {{title}}\n</h1>\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<div class=\"container-fluid\">\n  <app-jiffle-now></app-jiffle-now>\n</div>\n<!-- Routed views go here -->\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"jiffle text-left\" *ngIf=\"selectedQuestion && !submit\">\n  <p>Q. {{selectedQuestion.text}}</p>\n  <p *ngFor=\"let option of selectedQuestion.options; let i = index\" class=\"text-left\">\n    {{i | number2Alphabet}}. {{selectedQuestion.options[i]}}\n  </p>\n  <p class=\"answer box\">\n    <span (click)=\"selectAnswer(1)\">A</span>\n    <span (click)=\"selectAnswer(2)\">B</span>\n    <span (click)=\"selectAnswer(3)\">C</span>\n    <span (click)=\"selectAnswer(4)\">D</span>\n  </p>\n</div>\n\n<div class=\"jiffle text-left\" *ngIf=\"submit\">\n  <div *ngFor=\"let question of questionCollection; let i = index\" class=\"text-left\">\n    <p>Q. {{question.text}}</p>\n    <!-- {{i | number2Alphabet}}. {{selectedQuestion.options[i]}} -->\n    <p>\n      <span>Selected answer: {{question.answerSubmitted | number2Alphabet}}</span>\n      <span>Correcct answer: {{question.answer | number2Alphabet}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<form #formData=\"ngForm\" class=\"form-inline\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"Movie\">Movie: {{selectedMovie.name}}</label>\n    <select #selectedMov class=\"form-control\" (change)=selectMovie(selectedMov.value)>\n      <option value=\"{{movie.id}}\" *ngFor=\"let movie of movieCollection\">{{movie.name}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"movie\">Select Location: {{selectedMovie.location[0]}}</label>\n    <select #selectedLocation class=\"form-control\" (change)=selectLocation(selectedLocation.value)>\n      <option value=\"{{location}}\" *ngFor=\"let location of selectedMovie.location\">{{location}}</option>\n    </select>\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!formData.form.valid\">Fetch location</button>\n</form>\n<div class=\"row text-center\">\n  <sebm-google-map [latitude]=\"selectedMovie.lat\" [longitude]=\"selectedMovie.lng\" class=\"col-sm-12\">\n    <sebm-google-map-marker [latitude]=\"selectedMovie.lat\" [longitude]=\"selectedMovie.lng\"></sebm-google-map-marker>\n  </sebm-google-map>\n</div>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(438);


/***/ })

},[738]);
//# sourceMappingURL=main.bundle.map