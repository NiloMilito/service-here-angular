import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorComponent } from './vendedor/vendedor.component';



@NgModule({
  declarations: [VendedorComponent],
  imports: [
    CommonModule, VendedorComponent
  ]
})
export class VendedorModule { }
