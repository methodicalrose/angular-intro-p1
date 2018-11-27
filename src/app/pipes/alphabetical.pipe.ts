import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(array: any, filterBy: string): any[] {
    if (!array) { return array; }
    if (!filterBy) { return array; }
    array().sort((a, b) => {
      if ((typeof a[filterBy] || typeof b[filterBy]) === 'string') {
        a = a[filterBy].toLowerCase();
        b = b[filterBy].toLowerCase();
      } else {
        a = a[filterBy];
        b = b[filterBy];
      }
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
