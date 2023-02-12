import { Controller, Get, Inject } from '@nestjs/common';
import { CREATE_JWT_OUTBOUND_PORT } from '../port/out/create.jwt.outbound.port';
import { CreateJwtService } from '../services/jwt/create.jwt.service';

@Controller('auth')
export class CreateJwtController {
  constructor(
    @Inject(CREATE_JWT_OUTBOUND_PORT)
    private readonly createJwtService: CreateJwtService,
  ) {}

  @Get('jwt')
  makeJwt() {
    return this.createJwtService.excute({});
  }
}
