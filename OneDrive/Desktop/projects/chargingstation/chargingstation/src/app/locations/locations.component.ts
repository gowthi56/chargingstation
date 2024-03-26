import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { NewservService } from '../newserv.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit{
  locationForm!: FormGroup;
  submitted: boolean = false;
  locationData: any;
  map: any; 
  customIcon: any;
  kilowat:any

  constructor(private formBuilder: FormBuilder, private locationService: NewservService) { }

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.map = L.map('map', {
      center: [19.0760, 72.8777],
      zoom: 3
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.customIcon = L.icon({
      iconUrl: '../../assets/marker-icon.png', 
      iconSize: [28, 28], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32] 
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.locationForm.valid) {
      const country = this.locationForm.value.country;
      const city = this.locationForm.value.city;
      const location = `${city}, ${country}`;
      const limit = 100;
      this.locationService.getLocationData(location, limit).subscribe(
        (data: any) => {
          this.locationData = data.data;
          console.log(this.locationData);
          this.addMarkers();
          if (this.locationData.length > 0) {
            const firstLocation = this.locationData[0];
            const { latitude, longitude } = firstLocation;
            this.map.flyTo([latitude, longitude], 10, {
              animate: true,
              duration: 2 // Duration of the animation in seconds
            });
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
   }
  
  addMarkers() {
    if (!Array.isArray(this.locationData) || !this.map) return;
    for (const location of this.locationData) {
      const { latitude, longitude } = location;
      L.marker([latitude, longitude], { icon: this.customIcon }).addTo(this.map);
    }
  }
}
