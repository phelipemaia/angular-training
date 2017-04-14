import {Directive,ElementRef,Renderer} from '@angular/core';

@Directive({
    selector:'[chcolor]'
})
export class ChangeColorDirective{

    constructor(private el:ElementRef,private render:Renderer){

        this.changeColor("red");
    }

    private changeColor(color: string) {

        this.render.setElementStyle(this.el.nativeElement, 'color', color);
    }
}