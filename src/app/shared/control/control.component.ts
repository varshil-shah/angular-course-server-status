import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   someAttribute: 'control',
  //   '(click)': 'onClick()',
  // },
})
export class ControlComponent {
  @HostBinding('class') className = 'control';
  @Input({ required: true }) title!: string;

  constructor(private ele: ElementRef) {}

  @HostListener('click') onClick() {
    console.log(this.ele.nativeElement);
    console.log('Clicked!');
  }
}
