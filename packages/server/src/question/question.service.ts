import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createQuestionInput: CreateQuestionInput) {
    return this.prisma.question.create({ data: createQuestionInput });
  }

  findAll() {
    return this.prisma.question.findMany();
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({ where: { id } });
  }

  update(id: number, updateQuestionInput: UpdateQuestionInput) {
    return this.prisma.question.update({
      where: { id },
      data: { text: updateQuestionInput.text },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
