import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OnlineshoppingComponent } from './onlineshopping/onlineshopping.component';
import { MoviesComponent } from './movies/movies.component';
import { DailyComponent } from './daily/daily.component';
import { HomeservicesComponent } from './homeservices/homeservices.component';
import { DefaultComponent } from './default/default.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './restaurant/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes :Routes=[
{path:'homepage',component:HomepageComponent},
{path:'restaurants',component:RestaurantComponent},
{path:'restaurants/:name',component:MenuComponent},
{path:'onlineshopping',component:OnlineshoppingComponent},
{path:'daily',component:DailyComponent},
{path:'movies',component:MoviesComponent},
{path:'homeservices',component:HomeservicesComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'',component:SignupComponent},
{path:'**',component:DefaultComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RestaurantComponent,
    OnlineshoppingComponent,
    MoviesComponent,
    DailyComponent,
    HomeservicesComponent,
    DefaultComponent,
    SignupComponent,
    MenuComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    
  ],
  imports: [
    
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing:true //this is for debugging only
      }
    ),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
