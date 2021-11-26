import { AppService } from './../app.service';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { SeriesData, ArrayData } from "./series-data";
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
  polular:number[] = []
  keepWatching:number[] = []
  user = {
    name: '',
    id: ''
  }

  dataPopular:Array<SeriesData> = []
  dataKeepWatching:Array<SeriesData> = []
  isloadedPopular = false
  isloadedKeep = false

  dropdownActive = false
  modalData:SeriesData = {}
  modal = false
  logoInitWidth = '9.70em'

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
  keepModalOpen(keepOpen:boolean){
    this.modal = keepOpen
  }
  getModalData(modalData:SeriesData){
    this.modalData = {...modalData}
  }
  getmodal(modal:boolean){
    this.modal = modal
  }
  ngOnInit(): void {
    this.activRoute.queryParams.subscribe(({id, name}) => {
      this.user.name = name
      this.user.id = id;
    });
    this.appService.getArraySeries(this.user.id).subscribe(item => {
      const data  = item as ArrayData
      this.polular.push(...data.popular)
      this.keepWatching.push(...data.keepWatching)

      this.appService.getDataSeries(this.polular).forEach((serie) => {
        serie.subscribe(item => {
          this.dataPopular.push(item as SeriesData)
          this.isloadedPopular = true
          // const teste = setTimeout(() => {
          // }, 4000);
        })
      })

      this.appService.getDataSeries(this.keepWatching).forEach((serie) => {
        serie.subscribe(item => {
          this.dataKeepWatching.push(item as SeriesData)
          this.isloadedKeep = true
        })
      })
    })
  }
  ngDoCheck(){
    this.localLayoutSize = this.appService.layoutSize
    this.destroyed = this.appService.destroyed
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
