/**
 * Created by xulingming on 2017/9/4.
 */
import { Component, ViewChild } from '@angular/core';
import { MdRipple } from '@angular/material';

@Component({
  selector: 'ripple-demo',
  templateUrl: 'ripple-demo.html',
  styleUrls: ['ripple-demo.scss'],
})
export class RippleDemo {
  @ViewChild(MdRipple) ripple: MdRipple;

  centered = false;
  disabled = false;
  unbounded = false;
  rounded = false;
  radius: number;
  rippleSpeed = 1;
  rippleColor = '';
  disableButtonRipples = false;

  launchRipple(persistent = false) {
    if (this.ripple) {
      this.ripple.launch(0, 0, { centered: true, persistent});
    }
  }

  fadeOutAll() {
    if (this.ripple) {
      this.ripple.fadeOutAll();
    }
  }
}
