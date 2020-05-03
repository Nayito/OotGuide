import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-enemies",
  templateUrl: "./enemies.page.html",
  styleUrls: ["./enemies.page.scss"],
})
export class EnemiesPage implements OnInit {
  public enemies;

  constructor(private dService: DataService) {}

  ngOnInit() {
    this.dService.GetEnemyInfo();
    this.enemies = this.dService.enemies;
    return this.enemies;
  }
}
