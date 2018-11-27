import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(array: any, shouldReverse: boolean): any {
    if (shouldReverse) { return array.slice().reverse(); }
    return array;
  }

}
