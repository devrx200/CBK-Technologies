import { Component } from '@angular/core';
import { TopNavComponent } from '../../Components/top-nav/top-nav.component';
import { MainManuComponent } from '../../Components/main-manu/main-manu.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopNavComponent,MainManuComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
