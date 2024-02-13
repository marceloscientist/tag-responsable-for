import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
