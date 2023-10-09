import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    this.unsetHighlight();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.unsetHighlight();
  }

  setHighlight() {
    this.element.nativeElement.classList.add('highlight');
  }

  unsetHighlight() {
    this.element.nativeElement.classList.remove('highlight');
  }
}
