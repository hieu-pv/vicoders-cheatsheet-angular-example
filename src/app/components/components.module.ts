import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [BaseComponent, MasterComponent, MainComponent],
  imports: [CommonModule, RouterModule]
})
export class ComponentsModule {}
