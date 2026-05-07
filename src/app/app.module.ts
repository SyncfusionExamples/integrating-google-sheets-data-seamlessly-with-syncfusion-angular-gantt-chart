import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GanttModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
