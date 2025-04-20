import { Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * Handler for app loader events
 */
@Directive({
  selector: '[appLoader]',
  standalone: true
})
export class LoaderDirective {

  /**
   * Constructor 
   * @param elementRef Loader element reference
   */
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  /**
   * Logic for app loader hiding
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.elementRef.nativeElement.style.display = 'none';
    }, 500);
  }

}
