import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

  @HostBinding('class.hovered') isHobered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHobered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHobered = false;
  }

}
