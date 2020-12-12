import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Http
import { HttpClientModule } from '@angular/common/http';

//Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Toster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
