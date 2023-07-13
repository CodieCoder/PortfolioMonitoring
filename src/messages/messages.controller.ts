import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Request as NestRequest,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { SendMessageDto } from './dto/send-message.dto';
import { Messages } from './schema/messages.schema';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('message')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @UseGuards(AuthGuard)
  @Post()
  async sendMessage(
    @Body() body: SendMessageDto,
    @NestRequest() request,
  ): Promise<Messages> {
    const ipAddress = request.ip;
    const token = JSON.stringify(request.visitor);
    return this.messagesService.addMessage({ ...body, ipAddress, token });
  }

  @Get()
  async getMessages(): Promise<Messages[]> {
    return await this.messagesService.findAll();
  }
}
