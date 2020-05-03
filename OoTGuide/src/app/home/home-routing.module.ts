import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
            { path: 'home', loadChildren: () => import('./home.module').then(m => m.HomePageModule) },
            { path: 'items', loadChildren: () => import('../pages/items/items.module').then(m => m.ItemsPageModule) },
            { path: 'bosses', loadChildren: () => import('../pages/bosses/bosses.module').then(m => m.BossesPageModule) },
            { path: 'enemies', loadChildren: () => import('../pages/enemies/enemies.module').then(m => m.EnemiesPageModule) },
            { path: 'characters', loadChildren: () => import('../pages/characters/characters.module').then(m => m.CharactersPageModule) },
            { path: 'dungeons', loadChildren: () => import('../pages/dungeons/dungeons.module').then(m => m.DungeonsPageModule) },
            { path: 'locations', loadChildren: () => import('../pages/locations/locations.module').then(m => m.LocationsPageModule) },
            { path: 'login', loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule) }
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
export class HomePageRoutingModule {}
