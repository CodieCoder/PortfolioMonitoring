import { IsIP, IsString } from 'class-validator';

export class VisitorInteractionsDto {
  @IsIP()
  ipAddress: string;

  @IsString()
  token: string;

  @IsString()
  action: string;
}
