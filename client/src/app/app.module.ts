import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http';
// import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component'

//routes
import {routes} from './routes'

//services
import {AuthService} from './services/auth.service';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupFormComponent,
    PrivateComponent,
    ProfileComponent,
    HomeComponent,
    ExploreComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    // AppBootstrapModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
