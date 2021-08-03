import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm"
import { UserType } from "./user-type"

type PlainUser = {
  id?: string
  name: string
  userType: UserType
}

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string

  @Column({ name: "name" })
  name!: string

  // @Column({ name: "user_type_id" })
  // userTypeId!: number

  @ManyToOne(() => UserType)
  @JoinColumn({ name: "user_type_id" })
  userType!: UserType

  @CreateDateColumn({ name: "created_at" })
  readonly createdAt!: Date

  @UpdateDateColumn({ name: "updated_at" })
  readonly updatedAt!: Date

  constructor(attrs?: PlainUser) {
    if (!attrs) {
      return this
    }
    if (attrs.id) this.id = attrs.id
    this.name = attrs.name
    this.userType = attrs.userType
  }
}
