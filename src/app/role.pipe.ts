import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], role) {
    var output: Member[] = [];
    if (role === 'Back-end') {
      for(var i = 0; i < input.length; i++) {
        if (input[i].role === 'Back-end') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (role === 'Front-end') {
      for(var i = 0; i < input.length; i++) {
        if (input[i].role === 'Front-end') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (role === 'Mobile') {
      for(var i = 0; i < input.length; i++) {
        if (input[i].role === 'Mobile Developer') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
