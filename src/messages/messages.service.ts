import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Messages } from './schema/messages.schema';
import mongoose from 'mongoose';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Messages.name)
    private messageModel: mongoose.Model<Messages>,
  ) {}

  async addMessage(body: SendMessageDto): Promise<Messages> {
    const messageToSave = { ...body, sendStatus: false };
    const message = await this.messageModel.create(messageToSave);

    return message;
  }

  async findAll(): Promise<Messages[]> {
    return await this.messageModel.find();
  }
}
