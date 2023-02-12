import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CreateJwtController } from './controllers/create.jwt.controller';
import { CREATE_JWT_OUTBOUND_PORT } from './port/out/create.jwt.outbound.port';
import { CreateJwtService } from './services/jwt/create.jwt.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_KEY,
        signOptions: { expiresIn: '60s' },
      }),
    }),
  ],
  controllers: [CreateJwtController],
  providers: [
    { provide: CREATE_JWT_OUTBOUND_PORT, useClass: CreateJwtService },
  ],
})
export class AuthModule {}
