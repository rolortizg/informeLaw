import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component'
import { NgbdModalOptions } from './modal-options';
import { NgbdDropdownBasic } from './dropdown-basic';
import { NgbdModalBasic } from './modal-basic'

//routes
import {routes} from './routes'

//services
import {AuthService} from './services/auth.service';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './services/questions.service';
import { RamasComponent } from './ramas/ramas.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryComponent } from './category/category.component';
import { EditComponent } from './edit/edit.component';
import { FilterPipe } from './filter.pipe';
import { LawyerComponent } from './lawyer/lawyer.component';
import { BrowseComponent } from './browse/browse.component';
import { CapitalizrPipe } from './capitalizr.pipe';
import { BypassSecurityComponent } from './bypass-security/bypass-security.component';
import { InnerHtmlBindingComponent } from './inner-html-binding/inner-html-binding.component';
import { FichaComponent } from './ficha/ficha.component';
import { LawyerService } from './services/lawyer.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupFormComponent,
    PrivateComponent,
    ProfileComponent,
    HomeComponent,
    ExploreComponent,
    QuestionsComponent,
    NgbdModalOptions,
    NgbdDropdownBasic,
    NgbdModalBasic,
    
    RamasComponent,
    DetailComponent,
    CategoryComponent,
    EditComponent,
    FilterPipe,
    LawyerComponent,
    BrowseComponent,
    CapitalizrPipe,
    BypassSecurityComponent,
    InnerHtmlBindingComponent,
    FichaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    NgbModule.forRoot()
    // AppBootstrapModule
  ],
  providers: [AuthService,QuestionsService,LawyerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
