import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './domain/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
