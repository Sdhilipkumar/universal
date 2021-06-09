import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectModule as UxaSelectModule } from '@ux-aspects/ux-aspects';
import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, SelectRoutingModule, UxaSelectModule],
})
export class SelectModule {}
