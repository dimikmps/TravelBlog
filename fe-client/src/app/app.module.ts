import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component'
import { LandmarkCreateComponent } from './landmarks/landmark-create/landmark-create.component';
import { LandmarkListComponent } from './landmarks/landmark-list/landmark-list.component';
import { LandmarksService } from './landmarks.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandmarkCreateComponent,
    LandmarkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [
    LandmarksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
