import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnemiesPageRoutingModule } from './enemies-routing.module';

import { EnemiesPage } from './enemies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnemiesPageRoutingModule
  ],
  declarations: [EnemiesPage]
})
export class EnemiesPageModule {}
