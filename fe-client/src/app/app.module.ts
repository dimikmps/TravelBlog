import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LandmarkListComponent } from './landmarks/landmark-list/landmark-list.component';
import { LandmarksService } from './services/landmarks.service';
import { LoginComponent } from './login/login.component';
import { LandmarkSingleComponent } from './landmarks/landmark-single/landmark-single.component';
import { AuthService } from './services/auth.service';
import { LandmarkEditComponent } from './landmarks/landmark-edit/landmark-edit.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandmarkListComponent,
    LoginComponent,
    LandmarkSingleComponent,
    LandmarkEditComponent,
    FooterComponent,
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
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule,
    MatCarouselModule.forRoot()
  ],
  providers: [LandmarksService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
