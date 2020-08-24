import { Component, OnInit } from '@angular/core';
import { ThemService } from './them/them.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'directive-theme';
  activeThem = 'oceanBlueThemProps';
  constructor(private themService: ThemService) { }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  toggleThem(): void {
    // refactor this ugly code :) for demo only
    if (this.activeThem !== 'deepPurpleThemProps') {
      this.themService.setActiveThem('deepPurpleThemProps');
      this.activeThem = 'deepPurpleThemProps';
    } else {
      this.themService.setActiveThem('oceanBlueThemProps');
      this.activeThem = 'oceanBlueThemProps';
    }
  }
}
