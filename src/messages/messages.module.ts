import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesSchema } from '../messages/schema/messages.schema';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { JwtAuthService } from 'src/jwt/jwt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Messages', schema: MessagesSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
