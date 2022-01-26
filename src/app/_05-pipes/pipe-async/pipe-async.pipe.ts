import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAsync'
})
export class PipeAsyncPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
