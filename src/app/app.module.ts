import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,UsersComponent, HomeComponent, FeaturesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
