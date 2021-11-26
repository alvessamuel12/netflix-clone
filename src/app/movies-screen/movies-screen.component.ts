import { AppService } from './../app.service';
import { Observable, Subscription, Subject, takeUntil, delay } from 'rxjs';
import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SeriesData } from "./series-data";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.scss']
})
export class MoviesScreenComponent implements OnInit, OnDestroy, DoCheck {
  destroyed = new Subject<void>()
  localLayoutSize = ''
  constructor
  (
    private activRoute : ActivatedRoute,
    private appService : AppService
  ){}
  background:string = 'assets/img/banner.png'
  polular = [1,2,3,4,5,6]
  keepWatching = [7,8]
  user = {
    id: 0,
    name: 'Usuario 1'
  }

  dataPopular:Array<SeriesData> = []
  Subscription:Array<Subscription>= []
  dataKeepWatching:Array<SeriesData> = []
  Subscription1:Array<Subscription>= []
  dropdownActive = false
  modalData:SeriesData = {}
  modal = false
  isloadedPopular = false
  isloadedKeep = false
  logoInitWidth = '9.70em'
  slideCard2(element: HTMLElement, direction: number){
    element.scrollLeft += 300 * direction
  }
  isOverflown(element: HTMLElement) {
    return element.scrollWidth > element.clientWidth;
  }
  showMenuDropdown(){
    this.dropdownActive = !this.dropdownActive
  }
  closeMenuDropdown(){
    const timeout = setTimeout((x:string)=>{
      this.dropdownActive = false
      clearTimeout(timeout)
    },200)
  }
  teste(){
    console.log('teste')
  }
  showModal(cardData: SeriesData){
    this.modalData = {...cardData}
    this.modal = true
  }

  keepModalOpen(keepOpen:boolean){
    this.modal = false
  }
  getModalData(modalData:SeriesData){
    this.modalData = {...modalData}
  }
  getmodal(modal:boolean){
    this.modal = modal
  }
  ngOnInit(): void {
    this.activRoute.queryParams.subscribe(({id, name}) => {
      // this.user = { name, id };
    });

    this.appService.getDataSeries(this.polular).forEach((serie) => {
      this.Subscription.push(serie.subscribe(item => {
        const teste = setTimeout(() => {
          this.dataPopular.push(item as SeriesData)
          this.isloadedPopular = true
          clearTimeout(teste)
        }, 4000);
      }))
    })
    this.appService.getDataSeries(this.keepWatching).forEach((serie) => {
      this.Subscription1.push(serie.subscribe(item => {
        const teste = setTimeout(() => {
          this.dataKeepWatching.push(item as SeriesData)
          this.isloadedKeep = true
          clearTimeout(teste)
        }, 2000);
      }))
    })
  }
  ngDoCheck(){
    this.localLayoutSize = this.appService.layoutSize
    this.destroyed = this.appService.destroyed
  }
  ngOnDestroy() {
    this.Subscription.map(x => x.unsubscribe)
    this.Subscription1.map(x => x.unsubscribe)
    this.destroyed.next();
    this.destroyed.complete();
  }
}
