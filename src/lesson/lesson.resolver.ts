/* eslint-disable prettier/prettier */
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'abc123',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(returns => LessonType)
   createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
