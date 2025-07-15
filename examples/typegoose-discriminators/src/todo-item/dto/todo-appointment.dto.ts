import { GraphQLISODateTime, ObjectType } from '@nestjs/graphql'
import { FilterableField } from '@ptc-org/nestjs-query-graphql'

import { TodoItemDTO } from './todo-item.dto'

@ObjectType('TodoAppointment')
export class TodoAppointmentDTO extends TodoItemDTO {
  @FilterableField(() => GraphQLISODateTime)
  dateTime!: Date

  @FilterableField(() => [String])
  participants!: string[]
}
