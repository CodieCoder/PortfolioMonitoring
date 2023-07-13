import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitorSchema } from './schema/visitor.schema';
import { JwtAuthService } from 'src/jwt/jwt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Visitor', schema: VisitorSchema }]),
  ],
  controllers: [VisitorController],
  providers: [VisitorService, JwtAuthService],
})
export class VisitorModule {}
