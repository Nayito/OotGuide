

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "oot/login", pathMatch: "full" },
  // { path: "menu/login", loadChildren: () => import("./login/login.module").then ((m) => m.LoginPageModule)}
  // { path: "menu/home", loadChildren: () => import("./home/home.module").then((m) => m.HomePageModule),},
  // { path: "menu", loadChildren: () => import("./pages/menu/menu.module").then((m) => m.MenuPageModule),},
  { path: "oot", loadChildren: () => import ("./pages/oot/oot.module").then ((m) => m.OotPageModule),},
  { path: "oot/home", loadChildren: () => import ("./home/home.module").then((m) => m.HomePageModule),},

  { path: 'oot/login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
