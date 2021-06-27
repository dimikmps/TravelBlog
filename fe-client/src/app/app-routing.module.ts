import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandmarkListComponent } from './landmarks/landmark-list/landmark-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandmarkListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
