import { ElementRef, HostListener, Directive} from '@angular/core';

interface CSSStyleDeclarationWithResize extends CSSStyleDeclaration {
  resize: string
}

@Directive({
  selector: '[elastic]'
})

export class ElasticDirective {
  textareaEl: HTMLTextAreaElement;

  constructor(public element: ElementRef){
  }

  isTextarea(el: HTMLElement) {
    return el.tagName === 'TEXTAREA';
  }

  setupTextarea(textareaEl: HTMLTextAreaElement) {
    this.textareaEl = textareaEl;

    const style: CSSStyleDeclarationWithResize = this.textareaEl.style as CSSStyleDeclarationWithResize;
    style.overflow = 'hidden';
    style.resize = 'none';
  }

  ngAfterContentInit() {
    if(this.isTextarea(this.element.nativeElement)) {
      this.setupTextarea(this.element.nativeElement);
      return;
    }
    console.log(this.element.nativeElement.children);
    const children: HTMLElement[] = Array.from(this.element.nativeElement.children) as HTMLElement[];
    const textareaEl = children.find(el => this.isTextarea(el));
    if(textareaEl) {
      this.setupTextarea(textareaEl as HTMLTextAreaElement);
      return;
    }

    throw new Error('The `elastic` attribute directive must be used on a `textarea` or an element that contains a `textarea`.');
  }

  @HostListener('input')
  onInput(): void {
    this.adjust();
  }

  ngAfterContentChecked(): void {
    this.adjust();
  }

  adjust(): void {
    this.textareaEl.style.height = 'auto';
    this.textareaEl.style.height = this.textareaEl.scrollHeight + "px";
  }
}
