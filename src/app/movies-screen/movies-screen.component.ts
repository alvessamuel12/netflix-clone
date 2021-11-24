import { Observable, Subscription } from 'rxjs';
import { MoviesScreenService } from './movies-screen.service';
import { Component, OnInit } from '@angular/core';

interface SerieDataPopular {
  backgroundImage: String
  cardImage: String
  cast: String[]
  description:String
  genre: String[]
  minAge: null | Number
  relevance: null | Number
  scenes: String[]
  season: null | Number
  time: null | Number
  titleImage: String
  year:Number
}

@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.scss']
})
export class MoviesScreenComponent implements OnInit {
  constructor(private moviesScreenService:MoviesScreenService) {
  }
  background:string = 'assets/img/banner.png'
  polular = [1,2,3,4,5,6]
  // dataPopular:Observable<Object>[] = []
  // dataPopular:Array<SerieDataPopular> = []
  dataPopular:Array<SerieDataPopular> = []
  Subscription:Array<Subscription>= []
  cardPopularToShow:Array<SerieDataPopular> = []
  keepWatching = [7,8]
  dataKeepWatching:Observable<Object>[] = []
  qtCards = 4
  initialCard = 0
  ngOnInit(): void {
    // this.dataPopular = this.moviesScreenService.getDataSeries(this.polular)
    this.moviesScreenService.getDataSeries(this.polular).forEach((serie, index) => {
      console.log(index)
      this.Subscription.push(serie.subscribe(item => {
        this.dataPopular.push(item as SerieDataPopular)
      }))
      // console.log(this.dataPopular[1])
    })
    this.whichCardwillShow()
    this.dataKeepWatching = this.moviesScreenService.getDataSeries(this.keepWatching)

  }
  whichCardwillShow(){
      // return (index >= this.initialCard && index < this.qtCards + this.initialCard){

  }

  // .map((serie):SerieDataPopular => serie)
  //   // console.log(this.cardPopularToShow)
  slideCard(change:number){
    this.initialCard += change
    this.whichCardwillShow()
  }
}
