import { Observable, Subscription, Subject, takeUntil } from 'rxjs';
import { MoviesScreenService } from './movies-screen.service';
import { Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface SeriesData {
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
export class MoviesScreenComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>()
  layoutSize = ''

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);
  constructor
  (
    private moviesScreenService:MoviesScreenService,
    private breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      Object.keys(result.breakpoints).forEach(element => {
        if (result.breakpoints[element]){
          this.layoutSize = this.displayNameMap.get(element) ?? 'Unknown';
        }
      });
    })

  }
  background:string = 'assets/img/banner.png'
  polular = [1,2,3,4,5,6]
  dataPopular:Array<SeriesData> = []
  Subscription:Array<Subscription>= []
  keepWatching = [7,8]
  dataKeepWatching:Array<SeriesData> = []
  Subscription1:Array<Subscription>= []
  qtCards = 4
  initialCard = 0
  sliderCount = 0
  sliderPossibility = false

  user = {
    name: 'Usuário1'
  }

  ngOnInit(): void {
    this.moviesScreenService.getDataSeries(this.polular).forEach((serie) => {
      this.Subscription.push(serie.subscribe(item => {
        this.dataPopular.push(item as SeriesData)
      }))
    })
    this.moviesScreenService.getDataSeries(this.keepWatching).forEach((serie) => {
      this.Subscription1.push(serie.subscribe(item => {
        this.dataKeepWatching.push(item as SeriesData)
      }))
    })
    console.log(this.layoutSize)
  }

  slideCard(change:number){
    this.initialCard += change
    if(this.sliderCount >= 0 && this.sliderCount <= this.dataPopular.length - this.qtCards - 1 ){
      this.sliderCount += change
      this.sliderPossibility = true
    }
  }
  ngOnDestroy() {
    this.Subscription.map(x => x.unsubscribe)
    this.destroyed.next();
    this.destroyed.complete();
  }
}