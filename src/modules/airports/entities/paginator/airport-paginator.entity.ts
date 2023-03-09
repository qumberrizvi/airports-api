import { AirportPaginationMeta } from './airport-pagination-meta.entity';
import { Airport } from '../airport.entity';
import { ApiProperty } from '@nestjs/swagger';

export class AirportPaginator {
  @ApiProperty({ type: AirportPaginationMeta })
  pagination: AirportPaginationMeta;
  @ApiProperty({ type: Airport, isArray: true })
  data: Airport[];
}
