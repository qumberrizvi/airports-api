import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AviationStackConfigService } from '../../config/aviation-stack/aviation-stack-config.service';
import { endpoints } from './constants/endpoints.constant';
import { AxiosError } from 'axios';
import { AirportPaginator } from './entities/paginator/airport-paginator.entity';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AirportsService {
  private readonly logger = new Logger(AirportsService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly aviationStackConfigService: AviationStackConfigService,
  ) {}

  async findAll(page: number, limit: number): Promise<AirportPaginator> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<AirportPaginator>(
          this.aviationStackConfigService.url(endpoints.airports, page, limit),
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.message);
            throw 'Something went wrong';
          }),
        ),
    );
    return data;
  }
}
