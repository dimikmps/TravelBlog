import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandmarkEditComponent } from './landmarks/landmark-edit/landmark-edit.component';
import { LandmarkListComponent } from './landmarks/landmark-list/landmark-list.component';
import { LandmarkSingleComponent } from './landmarks/landmark-single/landmark-single.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandmarkListComponent },
  { path: 'landmark/:id', component: LandmarkSingleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component: LandmarkEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
