import { ApiProperty } from '@nestjs/swagger';

export class Airport {
  @ApiProperty({ example: '1' })
  id: string;
  @ApiProperty({ example: '-10' })
  gmt?: string;
  @ApiProperty({ example: '1' })
  airport_id: string;
  @ApiProperty({ example: 'AAA' })
  iata_code: string;
  @ApiProperty({ example: 'AAA' })
  city_iata_code: string;
  @ApiProperty({ example: 'NTGA' })
  icao_code: string;
  @ApiProperty({ example: 'PF' })
  country_iso2: string;
  @ApiProperty({ example: '6947726' })
  geoname_id: string;
  @ApiProperty({ example: '17.05' })
  latitude: string;
  @ApiProperty({ example: '-145.41667' })
  longitude: string;
  @ApiProperty({ example: 'Anaa' })
  airport_name: string;
  @ApiProperty({ example: 'French Polynesia' })
  country_name?: string;
  @ApiProperty({ example: null })
  phone_number?: string;
  @ApiProperty({ example: 'Pacific/Tahiti' })
  timezone: string;
}
