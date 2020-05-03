import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dungeons',
  templateUrl: './dungeons.page.html',
  styleUrls: ['./dungeons.page.scss'],
})
export class DungeonsPage implements OnInit {
  public dungeons;

  constructor(private dService: DataService) {}

  ngOnInit() {
    this.dService.GetDungeonInfo();
    this.dungeons = this.dService.dungeons;
    return this.dungeons;
  }

}
