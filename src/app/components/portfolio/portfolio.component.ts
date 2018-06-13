import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {

	@ViewChild('1') un; @ViewChild('2') deux; @ViewChild('3') trois; @ViewChild('4') quatre; @ViewChild('5') cinq; @ViewChild('6') six; @ViewChild('7') sept; 
	@ViewChild('8') huit; @ViewChild('9') neuf; @ViewChild('p') p;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => { 	

        const title = [this.un, this.deux, this.trois, this.quatre, this.cinq, this.six, this.sept, this.huit, this.neuf];
        const offset = [2220, 2260, 2300, 2340, 2390, 2360, 2320, 2280, 2240];

        for (var i in title) {

            for (var j in offset) {

                if (i == j) {
                 /* console.log(title[i] + " = " + offset[j]);*/
                    if (offset[j] === 2220 || offset[j] === 2260 || offset[j] === 2300 || offset[j] === 2340) {  
                       if (window.pageYOffset >= offset[j]) {
                            this.renderer.setStyle(title[i].nativeElement, 'left', 0);
                            this.renderer.setStyle(title[i].nativeElement, 'transition', 'left .4s');
                        } else {
                            this.renderer.removeStyle(title[i].nativeElement, 'left');
                          } 
                    } else if (offset[j] === 2360 || offset[j] === 2320 || offset[j] === 2280 || offset[j] === 2240) {
                        if (window.pageYOffset >= offset[j]) {
                            this.renderer.setStyle(title[i].nativeElement, 'right', 0);
                            this.renderer.setStyle(title[i].nativeElement, 'transition', 'right .4s');
                        } else {
                            this.renderer.removeStyle(title[i].nativeElement, 'right');
                          } 
                           
                    } else if (window.pageYOffset >= 2390) {
                            this.renderer.setStyle(title[i].nativeElement, 'opacity', 1);
                            this.renderer.setStyle(title[i].nativeElement, 'transition', 'opacity 1.5s');
                        } else {
                            this.renderer.removeStyle(title[i].nativeElement, 'opacity');
                        }
                }
            } 
        }
        /* Pour désactiver cette animation sur les portables (< 400px) */ 
        /*if (window.pageYOffset >= 2220 || document.documentElement.clientWidth <= 400) {
            this.renderer.setStyle(this.p.nativeElement, 'opacity', 1);
            this.renderer.setStyle(this.p.nativeElement, 'transition', 'opacity 2s');
        } else {
            this.renderer.removeStyle(this.p.nativeElement, 'opacity');
          } */
    }
}
