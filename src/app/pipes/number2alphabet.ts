import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'number2Alphabet' })
export class Number2Alphabet implements PipeTransform {
  transform(value) {
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return string[value];
  }
}
