import { registerAs } from '@nestjs/config';

export default registerAs('aviationStack', () => ({
  accessKey: process.env.AVIATION_STACK_ACCESS_KEY,
  baseUrl: process.env.AVIATION_STACK_BASE_URL,
}));
