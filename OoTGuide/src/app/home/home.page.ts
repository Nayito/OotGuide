import { Component, OnInit } from "@angular/core";
import { DataService } from '../services/data.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private dService: DataService) {}

  ngOnInit() {
    // this.dService.GetItemInfo().subscribe((x) => console.log(x));
    // this.dService.GetBossInfo().subscribe((x) => console.log(x));
    // this.dService.GetCharacterInfo().subscribe((x) => console.log(x));
    // this.dService.GetDungeonInfo().subscribe((x) => console.log(x));
    // this.dService.GetLocationInfo().subscribe((x) => console.log(x));
    // this.dService.GetEnemyInfo().subscribe((x) => console.log(x));
  }
}
