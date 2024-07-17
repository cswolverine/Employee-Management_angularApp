import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'src/app/users/users.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Features',component:FeaturesComponent},
  { path:'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
