import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    if (!value) {
      return [];
    }
    if (!args) {
      return value;
    }
    args = args.toLocaleLowerCase();
    return value.filter( user => {
      return user.login.toLowerCase().includes(args);
    });
  }

}
