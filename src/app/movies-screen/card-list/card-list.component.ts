import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SeriesData } from "./../series-data";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }
  @Input() isloaded = false
  @Input() data :Array<SeriesData> = []
  @Input() title = ''

  @Output() modalData = new EventEmitter<SeriesData>()
  @Output() modal = new EventEmitter<boolean>()


  slideCard2(element: HTMLElement, direction: number){
    element.scrollLeft += 300 * direction
  }
  showModal(cardData: SeriesData){
    this.modalData.emit(cardData)
    this.modal.emit(true)
  }
  isOverflown(element: HTMLElement) {
    return element.scrollWidth > element.clientWidth;
  }
  ngOnInit(): void {
  }

}
