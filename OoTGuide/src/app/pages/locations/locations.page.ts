import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
public locations;

  constructor(private dService: DataService) {}

  ngOnInit() {
    this.dService.GetLocationInfo();
    this.locations = this.dService.locations;
    return this.locations;
  }

}
