import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.page.html',
  styleUrls: ['./bosses.page.scss'],
})
export class BossesPage implements OnInit {
  public bosses;

  constructor(private dService: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.dService.GetBossInfo();
    this.bosses = this.dService.bosses;
    return this.bosses;
  }

}
