import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
        /*console.log(document.documentElement.clientWidth);*/
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => {
        this.elRef.nativeElement.style.top = 700 - (window.pageYOffset / 3) + 'px';
    };

}