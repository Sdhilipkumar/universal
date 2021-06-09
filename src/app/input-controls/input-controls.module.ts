import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule, RadioButtonModule } from '@ux-aspects/ux-aspects';
import { InputControlsRoutingModule } from './input-controls-routing.module';
import { InputControlsComponent } from './input-controls.component';

@NgModule({
  declarations: [InputControlsComponent],
  imports: [
    CommonModule,
    InputControlsRoutingModule,
    CheckboxModule,
    RadioButtonModule,
  ],
})
export class InputControlsModule {}
