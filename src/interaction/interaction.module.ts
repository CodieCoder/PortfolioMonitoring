import { Module } from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { InteractionController } from './interaction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InteractionsSchema } from './schema/interactions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Interactions', schema: InteractionsSchema },
    ]),
  ],
  controllers: [InteractionController],
  providers: [
    InteractionService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class InteractionModule {}
