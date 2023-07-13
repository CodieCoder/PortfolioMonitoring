import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Visitor {
  @Prop()
  ipAddress: string;

  @Prop()
  deviceInfo: string;

  @Prop()
  token: string;
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);
