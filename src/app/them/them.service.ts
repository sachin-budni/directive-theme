import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemService {
  private activeThem = new BehaviorSubject('oceanBlueThemProps');
  constructor() { }
  public getActiveTheme(): Observable<string> {
    return this.activeThem.asObservable();
  }

  public setActiveThem(name): void {
    this.activeThem.next(name);
  }
}
