import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './cmps/header/header.component';
import { TodosComponent } from './cmps/todos/todos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
