import { Component, OnInit } from '@angular/core';
import { NewservService } from '../newserv.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locationData:any
  map: any; 
  customIcon:any
  constructor(private locationService: NewservService){}
  
  ngOnInit(): void {
    const location = 'Mumbai,  India'; // Example location
    const limit = 100; // Example limit
  
    // this.locationService.getLocationData(location, limit).subscribe(
    //   (data: any) => {
    //     this.locationData = data.data;
    //     console.log(this.locationData);
    // this.addMarkers()
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );
    this.map = L.map('map', {
      center: [19.0760, 72.8777], 
      zoom: 3 
    });

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

     this.customIcon = L.icon({
      iconUrl: '../../assets/marker-icon.png', // Specify the path to your custom icon
      iconSize: [28, 28], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon
      popupAnchor: [0, -32] // Popup anchor point
    });

  }
    addMarkers() {
      if (typeof this.locationData !== 'object' || this.locationData === null || !this.map) return; // Ensure data is an object and map instance is available
    
      for (const key in this.locationData) {
        if (Object.prototype.hasOwnProperty.call(this.locationData, key)) {
          const location = this.locationData[key];
          const marker = L.marker([location.latitude, location.longitude], { icon: this.customIcon }).addTo(this.map);
          console.log(location.latitude);
          
        }
      }
    }
  
}
