import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [QuestionResolver, QuestionService],
  imports: [PrismaModule],
})
export class QuestionModule {}
