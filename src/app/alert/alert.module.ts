import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule, IconModule } from '@ux-aspects/ux-aspects';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, AlertRoutingModule, AlertModule, IconModule],
})
export class AlertPageModule {}
