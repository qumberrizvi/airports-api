import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AviationStackConfigService {
  constructor(private readonly configService: ConfigService) {}

  get baseUrl(): string {
    return this.configService.get('aviationStack.baseUrl');
  }

  get accessKey(): string {
    return this.configService.get('aviationStack.accessKey');
  }

  url(endpoint: string, page = 1, limit = 100): string {
    const offset = page * limit - limit + 1;
    return `${this.baseUrl}${endpoint}?access_key=${this.accessKey}&limit=${limit}&offset=${offset}`;
  }
}
