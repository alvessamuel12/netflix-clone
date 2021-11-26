import { SeriesData } from './../series-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MyTimePipe} from './../my-tyme.pipe'

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})

export class CardModalComponent implements OnInit {
  @Input() modalData:SeriesData = {}
  @Output() keepModalOpen = new EventEmitter<boolean>()
  cast = ''
  genre = ''
  scenes = ''
  imgTitle = ''
  constructor() { }
  getUrl(){
    if(this.modalData.backgroundImage)
   return this.modalData.backgroundImage.replace('()', '')
   return
  }

  closeModal( event:Event){
    const element = event.target as HTMLElement
    console.log(element.classList.value)
    if(element.classList.value !== 'container' && element.classList.value !== 'close' && !element.classList.contains('close') && !element.classList.contains('close-icon')) return
    console.log('fechar')
    this.keepModalOpen.emit(false)
  }
  ngOnInit(): void {
    // console.log(Object.keys(this.modalData))
    // console.log(this.modalData.backgroundImage)
    if(this.modalData.cast) this.cast = this.modalData.cast.join(', ') + ', mais'
    if(this.modalData.genre) this.genre = this.modalData.genre.join(', ')
    if(this.modalData.scenes) this.scenes = this.modalData.scenes.join(', ')
    // console.log(this.cast, this.genre, this.scenes)
  }

}
