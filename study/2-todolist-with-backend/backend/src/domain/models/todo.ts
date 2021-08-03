import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm"
import { User } from "./user"

type PlainTodo = {
  id?: string
  title: string
  isFinished: boolean
  user: User
}

@Entity({ name: "todo" })
export class Todo {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string

  @Column({ name: "title" })
  title!: string

  @Column({ name: "is_finished" })
  isFinished!: boolean

  @Column({ name: "user_id" })
  userId!: string

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User

  @CreateDateColumn({ name: "created_at" })
  readonly createdAt!: Date

  @UpdateDateColumn({ name: "updated_at" })
  readonly updatedAt!: Date

  constructor(attrs?: PlainTodo) {
    if (!attrs) {
      return this
    }
    if (attrs.id) this.id = attrs.id
    this.title = attrs.title
    this.isFinished = attrs.isFinished
    this.user = attrs.user
  }
}
