import { PageObjectBase } from 'src/app/tests/PageObjectBase';

export class ConverterFromHexPageObject extends PageObjectBase {

  constructor(root: HTMLDivElement) {
    super(root)
  }

  hex(text?: string) {
    return this._inputValue('.input-hex', text);
  }

  rgb(text?: string) {
    return this._inputValue('.input-rgb', text);
  }

  clear() {
    this._buttonClick('.btn-clear')
  }

  calc() {
    this._buttonClick('.btn-calc')
  }

}