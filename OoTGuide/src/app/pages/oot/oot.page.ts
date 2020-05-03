import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-oot',
  templateUrl: './oot.page.html',
  styleUrls: ['./oot.page.scss'],
})
export class OotPage implements OnInit {

  pages = [
    {
      title: 'Login',
      url: '/oot/login',
      icon: 'person-circle'
    },
    {
      title: 'Home',
      url: '/oot/home',
      icon: 'home'
    },
    {
      title: 'Items',
      url: '/oot/items',
      icon: 'bulb'
    },
    {
      title: 'Bosses',
      url: '/oot/bosses',
      icon: 'skull'
    },
    {
      title: 'Enemies',
      url: '/oot/enemies',
      icon: 'alert-circle'
    },
    {
      title: 'Characters',
      url: '/oot/characters',
      icon: 'body'
    },
    {
      title: 'Dungeons',
      url: '/oot/dungeons',
      icon: 'business'
    },
    {
      title: 'Locations',
      url: '/oot/locations',
      icon: 'earth'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
