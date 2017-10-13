import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[headerDirective]'
})
export class HeaderDirective {

  constructor(private el: ElementRef) {
  }

}
