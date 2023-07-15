import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromRequest(request);
    if (!token) {
      // throw new UnauthorizedException(
      //   "You're not allowed to access this resource",
      // );
      false;
    }
    try {
      const payload = await this.jwtService.verifyAsync(token);
      request['visitor'] = token;
    } catch {
      // throw new UnauthorizedException(
      //   "You're not allowed to access this resource.",
      // );
      false;
    }

    return true;
  }

  private extractTokenFromRequest(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
