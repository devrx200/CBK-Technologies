import { Component } from '@angular/core';
import { TopNavComponent } from '../../Components/top-nav/top-nav.component';
import { TopSliderComponent } from '../../Components/top-slider/top-slider.component';
import { MainManuComponent } from '../../Components/main-manu/main-manu.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent,MainManuComponent,TopSliderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
