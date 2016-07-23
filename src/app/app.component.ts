import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// Components
import { NavComponent } from './components/nav.component';
import { SliderComponent } from './components/slider.component';
import { VisionComponent } from './components/vision.component';
import { SolutionComponent } from './components/solution.component';
import { ProductComponent } from './components/product.component';
import { AboutComponent } from './components/about.component';
import { LeadershipTeamComponent } from './components/leadership.team.component';
import { CustomerAndPartnerComponent } from './components/customer.and.partner.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
// services


@Component({
  selector: 'gridx',
  template: `
    <navs></navs>
    <slider></slider>
    <vision></vision>
    <solution></solution>
    <div class="products">
      <div class="container">
        <product></product>
      </div>
    </div>
    <div class="about">
      <div class="container">
         <about></about>
      </div>
    </div>
    <div class="leadership-team">
      <div class="container">
         <leadership-team></leadership-team>
      </div>
    </div>
    <div class="customer-partner">
      <div class="container">
         <customer-partner></customer-partner>
      </div>
    </div>
    <div class="contact">
      <div class="container">
         <contact></contact>
      </div>
    </div>
    <div class="footer">
      <div class="container">
         <footer></footer>
      </div>
    </div>
  `,
  directives: [
    NavComponent,
    SliderComponent,
    VisionComponent,
    SolutionComponent,
    ProductComponent,
    AboutComponent,
    LeadershipTeamComponent,
    CustomerAndPartnerComponent,
    ContactComponent,
    FooterComponent
  ],
  providers: [HTTP_PROVIDERS] 
})

export class AppComponent {
  pageTitle: string = 'GridX';
}