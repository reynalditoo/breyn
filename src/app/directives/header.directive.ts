import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => { 	
    	if (window.pageYOffset >= 560 && document.documentElement.clientWidth <= 400) {
    		this.renderer.setStyle(this.elRef.nativeElement, 'position', 'fixed');
            this.renderer.setStyle(this.elRef.nativeElement, 'left', '0');
    		this.renderer.setStyle(this.elRef.nativeElement, 'transition', 'left 2s, width 2s');
    	} else {
    		this.renderer.removeStyle(this.elRef.nativeElement, 'position');
            this.renderer.removeStyle(this.elRef.nativeElement, 'left');
    	}
	}
}
