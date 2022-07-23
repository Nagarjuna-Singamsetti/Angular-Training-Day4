import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseover') applyMouseOver(){
    this.changeColor("#E5E4E2");
  }
  @HostListener('mouseleave') applyMouseLeave(){
    this.changeColor("white");
  }

  private changeColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor= color;
  }
}