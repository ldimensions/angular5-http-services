import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { Users } from './shared/service/users'

const appRouter: Routes = [
  { path: '', component: UserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRouter
      //,{ enableTracing: true }
    )
    ,HttpModule
  ],
  providers: [
    Users
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
