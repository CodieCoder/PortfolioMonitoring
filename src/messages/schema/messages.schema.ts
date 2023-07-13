import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SendStatusEnum } from 'src/common/constants';

@Schema({
  timestamps: true,
})
export class Messages {
  @Prop()
  ipAddress: string;

  @Prop()
  deviceInfo: string;

  @Prop()
  token: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  subject: string;

  @Prop()
  message: string;

  @Prop()
  sendStatus: SendStatusEnum;

  @Prop()
  apiResponse: string;
}

export const MessagesSchema = SchemaFactory.createForClass(Messages);
