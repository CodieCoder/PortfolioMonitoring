import { Module, ValidationPipe } from '@nestjs/common';
import { VisitorModule } from './visitors/visitor.module';
import { AppController } from './app.controller';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { InteractionModule } from './interaction/interaction.module';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '600s' },
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    VisitorModule,
    MessagesModule,
    InteractionModule,
    MailModule,
  ],
  controllers: [AppController],
  // providers: [
  //   {
  //     provide: APP_PIPE,
  //     useValue: new ValidationPipe({
  //       whitelist: true,
  //     }),
  //   },
  // ],
})
export class AppModule {}
