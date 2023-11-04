import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(seconds: number, ...args: unknown[]): string {
    let sec  = seconds % 60;
    let min = Math.floor(seconds / 60);
    return (min > 9 ? min : 0 + '' + min) + ':' + (sec > 9 ? sec : 0 + '' + sec);
  }

}
