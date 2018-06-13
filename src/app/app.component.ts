import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private elRef: ElementRef, private renderer: Renderer2, public mainService: MainService) { }

  @ViewChild('grande') grande: ElementRef;
  @ViewChild('medium') medium: ElementRef;
  @ViewChild('petite') petite: ElementRef;
  
  ngOnInit() {
    window.addEventListener("DOMContentLoaded", () => {
    if (document.documentElement.clientWidth <= 845) {
        window.location.assign("http://mobile.breyn.net");
      } 
    if (window.location.href !== 'https://www.breyn.net/') {
       window.location.assign("https://www.breyn.net/");
      }
    });

    window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth <= 845) {
        window.location.assign("http://mobile.breyn.net");
      } 
    });

  	window.addEventListener('scroll', () => {
      /*console.log(window.pageYOffset);*/

        const title = [this.petite, this.medium, this.grande];
        const offset = [835, 895, 955];

        for (var i in title) {          
            for (var j in offset) {                  
                if (i == j) {
                    if (window.pageYOffset >= offset[j]) {
                        this.renderer.setStyle(title[i].nativeElement, 'opacity', .7);
                        this.renderer.setStyle(title[i].nativeElement, 'transition', 'opacity .3s');
                    } else {
                        this.renderer.removeStyle(title[i].nativeElement, 'opacity');
                    }
                }
            }                 
        }
  	}, true);
  }
}