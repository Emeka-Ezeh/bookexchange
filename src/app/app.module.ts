import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  // Aggiungi questa riga
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';  
import { ProfileComponent } from './components/profile/profile.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    ProfileComponent,
    BookFormComponent,
    NavbarComponent,
    BookDetailComponent  // Dichiarato qui perché è nel tuo AppModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,  // Aggiungi questa riga per importare CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
