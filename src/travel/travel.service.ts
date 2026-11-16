import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';


export interface Trip {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class TravelService {
  private trips: Trip[] = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

  findAll(): Trip[] {
    return this.trips;
  }

  findOne(id: number): Trip {
    const trip = this.trips.find((item) => item.id === id);

    if (!trip) {
      throw new NotFoundException(`Voyage ${id} introuvable`);
    }

    return trip;
  }
}