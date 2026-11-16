import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import * as travelService from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Controller('travel')
export class TravelController {
  constructor(private readonly travelService: travelService.TravelService) {}

  @Post()
  create(): string {
    return 'planifier un nouveau voyage ici';
  }

  @Get()
  findAll(): travelService.Trip[] {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): travelService.Trip {
    return this.travelService.findOne(Number(id));
  }
}