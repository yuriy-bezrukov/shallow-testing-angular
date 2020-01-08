import { Component, Output, EventEmitter } from '@angular/core';
import { ConverterService } from '../services/converter.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-converter-from-hex',
  templateUrl: './converter-from-hex.component.html',
  styleUrls: ['./converter-from-hex.component.less']
})
export class ConverterFromHexComponent {

  hex: string;
  rgb: string;
  loading: boolean;

  @Output() private colorCalc = new EventEmitter<string>();

  constructor(private converterService: ConverterService, private apiService: ApiService) { }

  calc() {
    let rgb = this.converterService.hexToRgbString(this.hex);
    if (rgb) {
      this.colorCalc.emit(rgb);
      this.rgb = rgb;
      this.loading = true;
      this.apiService.saveHex(this.hex).subscribe(() => {
        this.loading = false;
      });
    }
  }

  clear() {
    this.hex = '';
    this.rgb = '';
  }

}
