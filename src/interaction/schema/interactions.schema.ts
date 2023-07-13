import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Interactions {
  @Prop()
  ipAddress: string;

  @Prop()
  token: string;

  @Prop()
  action: string;
}

export const InteractionsSchema = SchemaFactory.createForClass(Interactions);
