import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemDirective } from './them.directive';



@NgModule({
  declarations: [ThemDirective],
  exports: [ThemDirective],
  imports: [
    CommonModule,
  ]
})
export class ThemModule { }
