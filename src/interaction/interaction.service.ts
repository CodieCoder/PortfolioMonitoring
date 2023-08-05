import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VisitorInteractionsDto } from './dto/interactions-visitor.dto';
import { Interactions } from './schema/interactions.schema';
import mongoose from 'mongoose';

@Injectable()
export class InteractionService {
  constructor(
    @InjectModel(Interactions.name)
    private interactionsModel: mongoose.Model<Interactions>,
  ) {}

  async addInteraction(body: VisitorInteractionsDto) {
    const interaction = await this.interactionsModel.create(body);

    return interaction ? true : false;
  }

  async findAll() {
    const interactions = await this.interactionsModel.find();
    return interactions || [];
  }

  async findAndGroup() {
    const interactions = await this.interactionsModel.aggregate([
      { $group: { _id: '$ipAddress', interactions: { $push: '$$ROOT' } } },
    ]);

    return interactions;
  }
}
