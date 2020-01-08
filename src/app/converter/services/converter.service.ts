import { Injectable } from '@angular/core';
import { IRGB } from '../converter.model';

@Injectable()
export class ConverterService {

  constructor() { }
  
  hexToRgb(hex: string): IRGB {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private rgbToString(rgb: IRGB) {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  hexToRgbString(hex: string) {
    return this.rgbToString(this.hexToRgb(hex));
  }
  
}
