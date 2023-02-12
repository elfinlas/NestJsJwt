export const CREATE_JWT_OUTBOUND_PORT = 'Create_Jwt_Outbound_Port' as const;

export type CreateJwtInputDto = {};
export type CreateJwtOutputDto = { jwt: string };

export interface CreateJwtOutboundPort {
  excute(params: CreateJwtInputDto): CreateJwtOutputDto;
}
