import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angularServerSideRendering' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
