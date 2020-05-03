import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  public characters;

  constructor(private dService: DataService) {}

  ngOnInit() {
    this.dService.GetCharacterInfo();
    this.characters = this.dService.characters;
    return this.characters;
  }

}
