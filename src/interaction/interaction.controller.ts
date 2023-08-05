import {
  Body,
  Controller,
  Post,
  Request as NestRequest,
  UseGuards,
  Get,
} from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { getIpAddress } from 'src/utils/ipAddress';
import { Interactions } from './schema/interactions.schema';

@Controller('interaction')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}

  @UseGuards(AuthGuard)
  @Post()
  async addInteraction(
    @Body() body: string,
    @NestRequest() req,
  ): Promise<boolean> {
    const ipAddress = getIpAddress(req);
    return await this.interactionService.addInteraction({
      ipAddress,
      token: JSON.stringify(req.visitor),
      action: JSON.stringify(body),
    });
  }

  @Get()
  async getInteractions(): Promise<Interactions[]> {
    return await this.interactionService.findAll();
  }

  @Get('group')
  async groupInteractions(): Promise<Interactions[]> {
    return await this.interactionService.findAndGroup();
  }
}
