import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent implements OnInit, OnDestroy {

	@ViewChild('1') un; @ViewChild('2') deux; @ViewChild('3') trois; @ViewChild('4') quatre; @ViewChild('5') cinq; @ViewChild('6') six; @ViewChild('7') sept; 
	@ViewChild('8') huit; @ViewChild('9') neuf; @ViewChild('10') dix; @ViewChild('11') onze; @ViewChild('12') douze; @ViewChild('13') treize; @ViewChild('14') quatorze; 
	@ViewChild('15') quinze; @ViewChild('16') seize; @ViewChild('17') dixsept; @ViewChild('18') dixhuit; @ViewChild('19') dixneuf; @ViewChild('20') vingt; 
	@ViewChild('21') vingtetun; @ViewChild('22') vingtdeux; @ViewChild('23') vingttrois; /*@ViewChild('24') vingtquatre;*/
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => { 	
        const title = [this.un, this.deux, this.trois, this.quatre, this.cinq, this.six, this.sept, this.huit, this.neuf, this.dix, 
        this.onze, this.douze, this.treize, this.quatorze, this.quinze, this.seize, this.dixsept, this.dixhuit, this.dixneuf, this.vingt, 
        this.vingtetun, this.vingtdeux, this.vingttrois/*, this.vingtquatre*/];
        const offset = [195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335, 345, 355, 365, 375, 385, 395, 405, 415];

        for (var i in title) {
          
            for (var j in offset) {
                  
                if (i == j) {
                    /* Pour désactiver cette animation sur les portables (< 400px) */    
                    if (window.pageYOffset >= offset[j]) {
                        this.renderer.setStyle(title[i].nativeElement, 'opacity', 1);
                        this.renderer.setStyle(title[i].nativeElement, 'transition', 'opacity .1s');
                    } else {
                        this.renderer.removeStyle(title[i].nativeElement, 'opacity');
                    }
                    /* Pour désactiver cette animation sur les portables (< 400px) */    
                } /*else if (window.pageYOffset >= 460) {
                        this.renderer.setStyle(this.vingtquatre.nativeElement, 'right', 0);
                        this.renderer.setStyle(this.vingtquatre.nativeElement, 'transition', 'right .4s');
                    } else {
                        this.renderer.removeStyle(this.vingtquatre.nativeElement, 'right');
                    }*/
            }                 
        }
    } 
}
   

