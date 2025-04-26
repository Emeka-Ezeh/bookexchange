import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../app/components/home/home.component'
import { BookListComponent } from '../../app/components/book-list/book-list.component';
import { BookDetailComponent } from '../../app/components/book-detail/book-detail.component';
import { ProfileComponent } from '../../app/components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'books/:id', component: BookDetailComponent },

  // redirect unknown routes to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
