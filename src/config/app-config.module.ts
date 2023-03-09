import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import aviationStackConfig from './aviation-stack/aviation-stack.config';
import { AviationStackConfigService } from './aviation-stack/aviation-stack-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [aviationStackConfig],
    }),
  ],
  providers: [AviationStackConfigService],
  exports: [AviationStackConfigService],
})
export class AppConfigModule {}
