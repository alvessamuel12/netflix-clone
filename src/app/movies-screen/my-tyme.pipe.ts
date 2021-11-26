import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTime'
})
export class MyTimePipe implements PipeTransform {

  transform(value: number | null | undefined): string | undefined {
    if(value){
      if(value > 0 && value/60 < 1) {
        return value + 'Min';

      } else {
        const formatedHour = Math.floor(value/60)
        return formatedHour + 'h ' + (value - formatedHour*60)+'min'
      }
    }
    return
 }

}
