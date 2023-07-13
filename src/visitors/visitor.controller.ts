import {
  Body,
  Controller,
  Get,
  NotAcceptableException,
  Post,
  Req,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { AddNewVisitorDto } from './dto/add-visitor.dto';
import { Request } from 'express';
import { JwtAuthService } from 'src/jwt/jwt.service';
import { IAddVisitor } from 'src/common/types';
import { Visitor } from './schema/visitor.schema';

@Controller('visitors')
export class VisitorController {
  constructor(
    private readonly visitorService: VisitorService,
    private readonly authService: JwtAuthService,
  ) {}

  /**
   * Route used when a user visits the website.
   * recieves the user's IP address and device information
   * @params  accepts body (json) containing user cookies, IP and deivce information. Format : {'token' : string | undefined, 'ip' : string, 'deviceDetails': string}
   *
   * @returns a successful or new token if the current token has expired/doesn't exist.
   */
  @Post()
  async visit(
    @Body() body: AddNewVisitorDto,
    @Req() request: Request,
  ): Promise<IAddVisitor> {
    console.log('Testee did', body);
    if (!body.deviceInfo) {
      throw new NotAcceptableException('Invalid request');
    }
    const ipAddress = request.ip;
    const token = await this.authService.generateToken({
      ipAddress,
      deviceInfo: JSON.stringify(body.deviceInfo),
    });

    return this.visitorService.addVisitor({
      deviceInfo: JSON.stringify(body.deviceInfo),
      ipAddress,
      token,
    });
  }

  @Get()
  async getVisitors(): Promise<Visitor[]> {
    return await this.visitorService.findAll();
  }
}
