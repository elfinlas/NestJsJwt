import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  CreateJwtOutboundPort,
  CreateJwtInputDto,
  CreateJwtOutputDto,
} from '../../port/out/create.jwt.outbound.port';

export class CreateJwtService implements CreateJwtOutboundPort {
  constructor(@Inject(JwtService) private jwtService: JwtService) {}

  excute(params: CreateJwtInputDto): CreateJwtOutputDto {
    const payload = { user: 'bcow' };
    return { jwt: this.jwtService.sign(payload) };
  }
}
