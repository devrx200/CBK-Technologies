import { Component } from '@angular/core';
import { AdminNavComponent } from '../../Components/admin-nav/admin-nav.component';
import { AdminSideComponent } from '../../Components/admin-side/admin-side.component';
import { AdminFooterComponent } from '../../Components/admin-footer/admin-footer.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [AdminNavComponent,AdminSideComponent,AdminFooterComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

}
