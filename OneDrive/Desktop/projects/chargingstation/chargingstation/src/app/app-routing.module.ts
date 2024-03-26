import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LocationsComponent } from './locations/locations.component';
import { DownloadComponent } from './download/download.component';
import { PartnerComponent } from './partner/partner.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'location', component:LocationsComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'location', component: LocationsComponent},
  {path: 'partner', component: PartnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
