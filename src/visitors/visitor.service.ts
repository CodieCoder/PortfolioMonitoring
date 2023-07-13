import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Visitor } from './schema/visitor.schema';
import mongoose from 'mongoose';
import { AddVisitorDto } from './dto/add-visitor.dto';
import { IAddVisitor } from 'src/common/types';

@Injectable()
export class VisitorService {
  constructor(
    @InjectModel(Visitor.name)
    private visitorModel: mongoose.Model<Visitor>,
  ) {}

  async addVisitor(body: AddVisitorDto): Promise<IAddVisitor> {
    const visitor = await this.visitorModel.create(body);

    return { access_token: visitor.token };
  }

  // async findById(id: string) {
  //   const visitor = await this.interactionsModel.findById(id);
  //   if (!visitor) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return visitor;
  // }

  async findToken(token: string): Promise<Visitor> {
    return await this.visitorModel.findOne({ token });
  }

  async findAll(): Promise<Visitor[]> {
    return await this.visitorModel.find();
  }
}
