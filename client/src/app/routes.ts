import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component'

export const routes: Routes = [
    // { path: 'private', component: PrivateComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent},
    { path:'profile', component: ProfileComponent },
    { path: 'logout', component:LoginComponent},
    
    // { 
    //   path:'products', 
    //   component: ProductPageComponent,
    //   children:[
    //     {
    //       path: 'new',
    //       component: NewProductComponent
    //     }
    //   ]
    // },
    // {
    //   path: 'new',
    //   component: NewProductComponent
    // },
    {
      path: 'signup',
      component: SignupFormComponent
    },
    // {
    //   path: 'detail/:id',
    //   component: DetailComponent,
    //   children:[
    //       {
    //           path:'edit',
    //           component:EditProductComponent
    //       }
    //   ]
    // }
  ]

