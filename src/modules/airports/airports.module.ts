import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '../../config/app-config.module';

@Module({
  imports: [AppConfigModule, HttpModule],
  controllers: [AirportsController],
  providers: [AirportsService],
})
export class AirportsModule {}
