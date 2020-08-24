import { Directive, Inject, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ThemService } from './them.service';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { themes } from './themes';

@Directive({
  selector: '[appThem]'
})
export class ThemDirective implements OnInit, OnDestroy {
  private themeName = 'oceanBlueThemProps';
  private themServiceSubscription: Subscription;
  constructor(private elementRef: ElementRef,
              @Inject(DOCUMENT) private document: any,
              private themService: ThemService) { }

  ngOnInit(): void {
    this.updateTheme(this.themeName);
    this.themService.getActiveTheme()
      .subscribe(themeName => {
        this.themeName = themeName;
        this.updateTheme(this.themeName);

      });
  }

  updateTheme(themeName): void {
    const element = this.elementRef.nativeElement;
    const them = themes[themeName];
    for (const key in them) {
      element.style.setProperty(key, them[key]);
      this.document.body.style.setProperty(key, them[key]);
    }
  }

  ngOnDestroy(): void {
    if (this.themServiceSubscription) {this.themServiceSubscription.unsubscribe(); }
  }

}
