import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterFromHexComponent } from './converter-from-hex/converter-from-hex.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ConverterService } from './services/converter.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConverterFromHexComponent],
  exports: [ConverterFromHexComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    ConverterService
  ]
})
export class ConverterModule { }
