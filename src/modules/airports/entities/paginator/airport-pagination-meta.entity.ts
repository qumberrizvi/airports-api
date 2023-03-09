import { ApiProperty } from '@nestjs/swagger';

export class AirportPaginationMeta {
  @ApiProperty({ example: 0 })
  offset: number;
  @ApiProperty({ example: 100 })
  limit: number;
  @ApiProperty({ example: 100 })
  count: number;
  @ApiProperty({ example: 6706 })
  total: number;
}
