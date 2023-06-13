import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './core/layout/footer.component';
import { HeaderComponent } from './core/layout/header.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiInterceptor } from './core/auth/api.interceptor';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
