import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OotPageRoutingModule } from './oot-routing.module';

import { OotPage } from './oot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OotPageRoutingModule
  ],
  declarations: [OotPage]
})
export class OotPageModule {}
