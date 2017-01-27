import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], args) {
    return null;
  }

}
