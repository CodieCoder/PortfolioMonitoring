import { Test, TestingModule } from '@nestjs/testing';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';

describe('VisitorController', () => {
  let visitorController: VisitorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VisitorController],
      providers: [VisitorService],
    }).compile();

    visitorController = app.get<VisitorController>(VisitorController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
