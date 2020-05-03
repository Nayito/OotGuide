import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public apiUrl = environment.api;
  private loginUrl = this.apiUrl + 'oot/auth/login';
  private token; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  GetItems(){
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'bearer' + this.token);
    this.http.get(this.bossUrl, this.httpOptions).subscribe(data =>
      {
        console.log(data)
      });
  }

  itemUrl = this.apiUrl + "OoT/items";
  bossUrl = this.apiUrl + "OoT/bosses";
  enemyUrl = this.apiUrl + "OoT/enemies";
  characterUrl = this.apiUrl + "OoT/characters";
  dungeonUrl = this.apiUrl + "OoT/dungeons";
  locationUrl = this.apiUrl + "OoT/locations";

  constructor(private http: HttpClient, 
              private dService: DataService,
              private router: Router) {}

  Login(credentials: any) {
    // Post Request
    // this.http.post( url to post to , information to be passed)

    this.http.post(this.loginUrl, credentials).subscribe(data => {
      this.token = data;
      // Grabbing the value inside of the object
      this.token = this.token.token;
      console.log(this.token);
      // This was moved from the loginpage.ts
      this.router.navigate(['oot/home']);
    });

  }

  itemData;
  items = [];
  locationData;
  locations = [];
  bossData;
  bosses = [];
  enemyData;
  enemies = [];
  characterData;
  characters = [];
  dungeonData;
  dungeons = [];

  GetItemInfo() {
    this.itemData = this.http.get(this.itemUrl);
    this.itemData.subscribe(
      x => {
      for (const s of x) {
        const itemInfo = {
          title: s.title,
          desc: s.desc,
          img: s.img,
          url: s.url,
        };
        this.items.push(itemInfo);
      }
      // console.log(this.items);
    });
    return this.items;
  }

  GetBossInfo() {
    this.bossData = this.http.get(this.bossUrl);
    this.bossData.subscribe(
      x => {
      for (const s of x) {
        const bossInfo = {
          title: s.title,
          desc: s.desc,
          img: s.img,
          url: s.url,
        };
        this.bosses.push(bossInfo);
      }
      // console.log(this.bosses);
    });
    return this.bosses;
  }
  GetEnemyInfo() {
    this.enemyData = this.http.get(this.enemyUrl);
    this.enemyData.subscribe(
      x => {
          for (const s of x){
            const enemyInfo = {
            title: s.title,
            desc: s.desc,
            img: s.img,
            url: s.url,
          };
          this.enemies.push(enemyInfo)
        }
        // console.log(this.enemies);
      }
    )
    return this.enemies;
  }
  GetCharacterInfo() {
    this.characterData = this.http.get(this.characterUrl);
    this.characterData.subscribe(
      x => {
          for (const s of x){
            const characterInfo = {
            title: s.title,
            desc: s.desc,
            img: s.img,
            url: s.url,
          };
          this.characters.push(characterInfo)
        }
        // console.log(this.characters);
      }
    )
    return this.characters;
  }
  GetDungeonInfo() {
    this.dungeonData = this.http.get(this.dungeonUrl);
    this.dungeonData.subscribe(
      x => {
          for (const s of x){
            const dungeonInfo = {
            title: s.title,
            desc: s.desc,
            img: s.img,
            url: s.url,
          };
          this.dungeons.push(dungeonInfo)
        }
        // console.log(this.dungeons);
      }
    )
    return this.dungeons;
  }
  GetLocationInfo() {
    this.locationData = this.http.get(this.locationUrl);
    this.locationData.subscribe(
      x => {
          for (const s of x){
            const locationInfo = {
            title: s.title,
            desc: s.desc,
            img: s.img,
            url: s.url,
          };
          this.locations.push(locationInfo)
        }
        // console.log(this.locations);
      }
    )
    return this.locations;
  }

  // itemInfo;
  // bossInfo;
  // enemyInfo;
  // characterInfo;
  // dungeonInfo;
  // locationInfo;
  // savedItemInfo = [];
  // savedBossInfo = [];
  // savedEnemyInfo = [];
  // savedCharacterInfo = [];
  // savedDungeonInfo = [];
  // savedLocationInfo = [];

  // itemUrl = 'https://spreadsheets.google.com/feeds/list/1aZLF6tGC4oY3WnhuAO_pY3TKKvV1u5Pzfj0AxpShsbg/2/public/full?alt=json';
  // bossUrl = 'https://spreadsheets.google.com/feeds/list/1aZLF6tGC4oY3WnhuAO_pY3TKKvV1u5Pzfj0AxpShsbg/3/public/full?alt=json';
  // enemyUrl = 'https://spreadsheets.google.com/feeds/list/1aZLF6tGC4oY3WnhuAO_pY3TKKvV1u5Pzfj0AxpShsbg/4/public/full?alt=json';
  // characterUrl = 'https://spreadsheets.google.com/feeds/list/1aZLF6tGC4oY3WnhuAO_pY3TKKvV1u5Pzfj0AxpShsbg/5/public/full?alt=json';
  // dungeonUrl = 'https://spreadsheets.google.com/feeds/list/1aZLF6tGC4oY3WnhuAO_pY3TKKvV1u5Pzfj0AxpShsbg/6/public/full?alt=json';
  // locationUrl = 'https://spreadsheets.google.com/feeds/list/1aZLF6tGC4oY3WnhuAO_pY3TKKvV1u5Pzfj0AxpShsbg/7/public/full?alt=json';

  // constructor(private http: HttpClient) { }

  // getItemData() {
  //   this.itemInfo = this.http.get(this.itemUrl);
  //   this.itemInfo.subscribe(
  //     x => {
  //       for (const s of x.feed.entry) {
  //         const locationInfo = {
  //           name: s.gsx$swords.$t,
  //           desc: s.gsx$description.$t,
  //           img: s.gsx$images.$t,
  //         };
  //         this.savedItemInfo.push(locationInfo);
  //       }
  //      // console.log(this.savedItemInfo);
  //     }
  //   )
  //   return this.savedItemInfo;
  // }
  // getBossData() {
  //   this.bossInfo = this.http.get(this.bossUrl);
  //   this.bossInfo.subscribe(
  //     x => {
  //       for (const s of x.feed.entry) {
  //         const locationInfo = {
  //           name: s.gsx$subbosses.$t,
  //           desc: s.gsx$description.$t,
  //           img: s.gsx$images.$t,
  //         };
  //         this.savedBossInfo.push(locationInfo);
  //       }
  //      // console.log(this.savedBossInfo);
  //     }
  //   )
  //   return this.savedBossInfo;
  // }
  // getEnemyData() {
  //   this.enemyInfo = this.http.get(this.enemyUrl);
  //   this.enemyInfo.subscribe(
  //     x => {
  //       for (const s of x.feed.entry) {
  //         const locationInfo = {
  //           name: s.gsx$enemies.$t,
  //           desc: s.gsx$description.$t,
  //           img: s.gsx$images.$t,
  //         };
  //         this.savedEnemyInfo.push(locationInfo);
  //       }
  //      // console.log(this.savedEnemyInfo);
  //     }
  //   )
  //   return this.savedEnemyInfo;
  // }
  // getCharacterData() {
  //   this.characterInfo = this.http.get(this.characterUrl);
  //   this.characterInfo.subscribe(
  //     x => {
  //       for (const s of x.feed.entry) {
  //         const locationInfo = {
  //           name: s.gsx$hyrule.$t,
  //           desc: s.gsx$description.$t,
  //           img: s.gsx$images.$t,
  //         };
  //         this.savedCharacterInfo.push(locationInfo);
  //       }
  //      // console.log(this.savedCharacterInfo);
  //     }
  //   )
  //   return this.savedCharacterInfo;
  // }
  // getDungeonData() {
  //   this.dungeonInfo = this.http.get(this.dungeonUrl);
  //   this.dungeonInfo.subscribe(
  //     x => {
  //       for (const s of x.feed.entry) {
  //         const locationInfo = {
  //           name: s.gsx$maindungeons.$t,
  //           desc: s.gsx$description.$t,
  //           img: s.gsx$images.$t,
  //         };
  //         this.savedDungeonInfo.push(locationInfo);
  //       }
  //      // console.log(this.savedDungeonInfo);
  //     }
  //   )
  //   return this.savedDungeonInfo;
  // }
  // getLocationData() {
  //   this.locationInfo = this.http.get(this.locationUrl);
  //   this.locationInfo.subscribe(
  //     x => {
  //       for (const s of x.feed.entry) {
  //         const locationInfo = {
  //           name: s.gsx$hyrulefield.$t,
  //           desc: s.gsx$description.$t,
  //           img: s.gsx$images.$t,
  //         };
  //         this.savedLocationInfo.push(locationInfo);
  //       }
  //      // console.log(this.savedLocationInfo);
  //     }
  //   )
  //   return this.savedLocationInfo;
  // }
}
