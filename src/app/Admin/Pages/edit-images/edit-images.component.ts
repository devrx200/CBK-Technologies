import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-edit-images',
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './edit-images.component.html',
  styleUrls: ['./edit-images.component.css']
})
export class EditImagesComponent {
  LogoImg: FormGroup;
  selectedLogo: string | ArrayBuffer | null = null;
  Imgresponse:any;


  constructor(private fb: FormBuilder,public http:HttpClient) {
    this.LogoImg = this.fb.group({
      selectedLogo: [null] // LogoImg FormGroup
    });
  }




  // Select Image 
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.selectedLogo = e.target.result;
        this.LogoImg.patchValue({
          selectedLogo: this.selectedLogo // Update the selectedLogo FormControl with the loaded image data
        });
      };
    }
  }


  // constructor(private http: HttpClient) {}
//  submit
onSubmit(){
  console.log(this.LogoImg.value);

}

// Fetch Image From DataBase
getImgUrl()
{
  this.http.get('http://localhost:3000/api/get/slide',).subscribe(response => {
    this.Imgresponse = response;
  });
}
// Delete Image By Id
deleteImg(id:any) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });// Set Headers 
  const body={id:id};
  console.log(`Deleting Image With Id:=> ${id}`);
  this.http.post('http://localhost:3000/api/get/slide-delete',body,{headers}).subscribe(response => {
    console.log(response);
    },error => {
      console.error(error);
    });
}






ngOnInit(): void {
  this.getImgUrl()
}

}
