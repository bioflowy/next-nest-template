import { CreateQuestionInput } from './create-question.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  id: number;
}
