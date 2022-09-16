import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Resolver('Question')
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Mutation('createQuestion')
  create(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
  ) {
    return this.questionService.create(createQuestionInput);
  }

  @Query('questions')
  findAll() {
    return this.questionService.findAll();
  }

  @Query('question')
  findOne(@Args('id') id: number) {
    return this.questionService.findOne(id);
  }

  @Mutation('updateQuestion')
  update(
    @Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput,
  ) {
    return this.questionService.update(
      updateQuestionInput.id,
      updateQuestionInput,
    );
  }

  @Mutation('removeQuestion')
  remove(@Args('id') id: number) {
    return this.questionService.remove(id);
  }
}
