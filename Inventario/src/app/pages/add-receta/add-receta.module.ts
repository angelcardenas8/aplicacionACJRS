import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecetaPageRoutingModule } from './add-receta-routing.module';

import { AddRecetaPage } from './add-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecetaPageRoutingModule
  ],
  declarations: [AddRecetaPage]
})
export class AddRecetaPageModule {}
