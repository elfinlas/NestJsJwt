import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './domain/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({}), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
