import { Component } from '@angular/core';
import { TopNavComponent } from '../../Components/top-nav/top-nav.component';
import { MainManuComponent } from '../../Components/main-manu/main-manu.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TopNavComponent,MainManuComponent,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
