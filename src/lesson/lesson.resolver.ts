/* eslint-disable prettier/prettier */
import { LessonType } from './lesson.type';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => LessonType)
export class LessonResolver {
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
  createLesson() {
// 
  }
}
