
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OotPage } from './oot.page';

const routes: Routes = [
  {
    path: '',
    component: OotPage,
    children: [
      { path: 'home', loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule) },
      { path: 'items', loadChildren: () => import('../items/items.module').then(m => m.ItemsPageModule) },
      { path: 'bosses', loadChildren: () => import('../bosses/bosses.module').then(m => m.BossesPageModule) },
      { path: 'enemies', loadChildren: () => import('../enemies/enemies.module').then(m => m.EnemiesPageModule) },
      { path: 'characters', loadChildren: () => import('../characters/characters.module').then(m => m.CharactersPageModule) },
      { path: 'dungeons', loadChildren: () => import('../dungeons/dungeons.module').then(m => m.DungeonsPageModule) },
      { path: 'locations', loadChildren: () => import('../locations/locations.module').then(m => m.LocationsPageModule) },

      { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule) }
    ]
  },
  {
    path: '',
    redirectTo: './oot/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OotPageRoutingModule {}
