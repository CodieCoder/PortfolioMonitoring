import {
  Body,
  Controller,
  Post,
  Request as NestRequest,
  UseGuards,
} from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('interaction')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}

  @UseGuards(AuthGuard)
  @Post()
  async addInteraction(
    @Body() body: string,
    @NestRequest() req,
  ): Promise<boolean> {
    const ipAddress =
      JSON.stringify(req.headers['x-forwarded-for']) ||
      req.socket.remoteAddress;
    return await this.interactionService.addInteraction({
      ipAddress,
      token: JSON.stringify(req.visitor),
      action: JSON.stringify(body),
    });
  }
}
