import { IsString, IsIP } from 'class-validator';

export class AddVisitorDto {
  @IsIP()
  ipAddress: string;

  @IsString()
  deviceInfo: string;

  @IsString()
  token: string;
}

export class IDeviceInfo {
  isBrowser: boolean;
  browserMajorVersion: string;
  browserFullVersion: string;
  browserName: string;
  engineName: string;
  engineVersion: string;
  osName: string;
  osVersion: string;
  userAgent: string;
}

export class AddNewVisitorDto {
  @IsString()
  deviceInfo: IDeviceInfo;
}
