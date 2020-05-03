import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-items",
  templateUrl: "./items.page.html",
  styleUrls: ["./items.page.scss"],
})
export class ItemsPage implements OnInit {
  public items;

  constructor(private dService: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.dService.GetItemInfo();
    this.items = this.dService.items;
    return this.items;
    
  }
}
