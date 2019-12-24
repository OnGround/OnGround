import { Injectable } from '@angular/core';

export interface Sports {
  type: string;
  location: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})

export class CourtBookingService {
  states: Sports[] = [
    {
      type: 'Cricket',
      location: 'venue1 malleshwaram Bangalore',
      details: 'This will contain the details'
    },
    {
      type: 'Football',
      location: 'venue2 hebbal Mysore',
      details: 'This will contain the details'
    },
    {
      type: 'Badminton',
      location: 'venue3 NCR road New Delhi',
      details: 'This will contain the details'
    },
    {
      type: 'Hockey',
      location: 'eiden garden howrah road Kolkota',
      details: 'This will contain the details'
    }
  ];

  constructor() { }
}
