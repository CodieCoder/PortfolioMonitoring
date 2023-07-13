import { IsIP, IsString, IsEmail, IsOptional } from 'class-validator';

export class SendMessageDto {
  @IsOptional()
  @IsIP()
  ipAddress: string;

  @IsString()
  deviceInfo: string;

  @IsString()
  token: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  subject: string;

  @IsString()
  message: string;
}
