import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AdminHomeComponent } from './Admin/Pages/admin-home/admin-home.component';
import { EditImagesComponent } from './Admin/Pages/edit-images/edit-images.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';

export const routes: Routes = [
    { path: 'Home', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    {path:'', title:'Home-Page', component:HomeComponent },
    {path:'contact', title:'Contact-Us Page', component:ContactUsComponent},
    {path:'about', title:'About-Us Page', component:AboutUsComponent},

    // Admin Route

    {path:'admin', title:'Home-Home-Page', component:AdminHomeComponent},
    {path:'admin',children:[
        {path:'edit-home',title:"Edit Home Page Content",component:EditImagesComponent}
        ]
    },



    {'path':'**', 'title':'Error 404-Page', component:HomeComponent }
];
