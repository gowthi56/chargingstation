import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChargeComponent } from './charge/charge.component';
import { NewservService } from './newserv.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LocationsComponent } from './locations/locations.component';
import { DownloadComponent } from './download/download.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ChargeComponent,
    HomeComponent,
    AboutusComponent,
    LocationsComponent,
    DownloadComponent,
    PartnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NewservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
