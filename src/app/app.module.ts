import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrestationsComponent } from './components/prestations/prestations.component';
import { DeveloppeurComponent } from './components/developpeur/developpeur.component';
import { FaqComponent } from './components/faq/faq.component';
import { SourireComponent } from './components/sourire/sourire.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

import { ParallaxDirective } from './directives/parallax.directive';
import { HeaderDirective } from './directives/header.directive';

import { MainService } from './services/main.service';
import { ContactService } from './components/contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderDirective,
    ParallaxDirective,
    HeaderComponent,
    FooterComponent,
    PrestationsComponent,
    DeveloppeurComponent,
    FaqComponent,
    SourireComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
