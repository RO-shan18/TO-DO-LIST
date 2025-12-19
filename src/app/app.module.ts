import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { FindComponent } from './find/find.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { ToastModule } from 'primeng/toast';
import { PasswordpopupComponent } from './passwordpopup/passwordpopup.component';
import { MessageService } from 'primeng/api';

const configureroute: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'Find', component: FindComponent},
  { path: '**', component: PageNotFoundComponent},
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FindComponent,
    PageNotFoundComponent,
    NavigationbarComponent,
    AlltasksComponent,
    AddtasksComponent,
    PasswordpopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(configureroute),
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
