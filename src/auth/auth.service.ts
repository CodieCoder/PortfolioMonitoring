import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { VisitorService } from 'src/visitors/visitor.service';

interface IGenerateToken {
  ipAddress: string;
  deviceInfo: string;
}

@Injectable()
export class AuthService {
  constructor(
    private visitorsService: VisitorService,
    private jwtService: JwtService,
  ) {}

  async generateToken(visitor: IGenerateToken): Promise<string> {
    const payload = { user: visitor.ipAddress, details: visitor.deviceInfo };
    return await this.jwtService.signAsync(payload);
  }

  async verifyToken(token) {
    const isToken = await this.visitorsService.findToken(token);
    if (!isToken) {
      throw new UnauthorizedException(
        "Error 10A . You're not allowed to access this resource",
      );
    }

    return true;
  }
}
