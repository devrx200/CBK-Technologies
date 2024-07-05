import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-manu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-manu.component.html',
  styleUrl: './main-manu.component.css'
})
export class MainManuComponent {
  selectedLogo: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.selectedLogo = e.target.result;
      };
    }
  }



}
