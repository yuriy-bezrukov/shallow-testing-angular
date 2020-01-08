
export class PageObjectBase {

  constructor(private root: HTMLDivElement) { }

  _inputValue(cssSelector: string, value: string) {
    if (value) {
      this.root.querySelector<HTMLInputElement>(cssSelector).value = value;
      this.root.querySelector<HTMLInputElement>(cssSelector).dispatchEvent(new Event('input'));
    }
    else {
      return this.root.querySelector<HTMLInputElement>(cssSelector).value
    }
  }

  _buttonClick(cssSelector: string) {
    this.root.querySelector<HTMLButtonElement>(cssSelector).dispatchEvent(new Event('click'));
  }

}

