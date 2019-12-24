import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CourtBookingService, Sports } from '../court-booking.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-court-booking',
  templateUrl: './court-booking.component.html',
  styleUrls: ['./court-booking.component.scss']
})
export class CourtBookingComponent implements OnInit {

  typeCtrl = new FormControl();
  locationCtrl = new FormControl();
  filteredStates: Observable<Sports[]>;
  filteredLocations: Observable<Sports[]>;
  result: any = [];
  display: number = 0;
  states: Sports[] = this.courtBooking.states;

  constructor(private courtBooking: CourtBookingService) {
    this.filteredStates = this.typeCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );

    this.filteredLocations = this.locationCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterLocations(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): Sports[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.type.toLowerCase().includes(filterValue));
  }

  private _filterLocations(value: string): Sports[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.location.toLowerCase().includes(filterValue));
  }

  resultClicked(ind: number) {
    alert(`${this.result[ind].type}, ${this.result[ind].location} clicked`);
  }

  findResults() {
    this.display = 1;
    this.result = (this.states.filter(ele =>
      ele.type.toLowerCase().includes(this.typeCtrl.value.toLowerCase()) &&
      ele.location.toLowerCase().includes(this.locationCtrl.value.toLowerCase())));
  }

  ngOnInit() {
  }

}
