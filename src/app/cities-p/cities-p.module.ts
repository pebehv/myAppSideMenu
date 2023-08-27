import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitiesPPageRoutingModule } from './cities-p-routing.module';

import { CitiesPPage } from './cities-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitiesPPageRoutingModule
  ],
  declarations: [CitiesPPage]
})
export class CitiesPPageModule {}
