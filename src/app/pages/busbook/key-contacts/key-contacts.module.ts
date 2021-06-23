import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyContactsPageRoutingModule } from './key-contacts-routing.module';

import { KeyContactsPage } from './key-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyContactsPageRoutingModule
  ],
  declarations: [KeyContactsPage]
})
export class KeyContactsPageModule {}
