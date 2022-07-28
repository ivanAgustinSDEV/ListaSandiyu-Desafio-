import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [...fromComponents.components, CardUserComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
