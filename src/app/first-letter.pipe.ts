import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {
  transform(surname?: String): String | undefined {
    if (surname != '') {
      return surname?.charAt(0).toUpperCase();
    } else {
      return '';
    }
  }
}
