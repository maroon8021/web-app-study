import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  PrimaryColumn,
} from "typeorm"

export type UserTypeName = "member" | "admin"

type PlainUserType = {
  id: number
  name: UserTypeName
}

@Entity({ name: "user_type" })
export class UserType {
  @PrimaryColumn()
  readonly id!: number

  @Column({ name: "name" })
  readonly name!: UserTypeName

  @CreateDateColumn({ name: "created_at" })
  readonly createdAt!: Date

  @UpdateDateColumn({ name: "updated_at" })
  readonly updatedAt!: Date

  constructor(attrs?: PlainUserType) {
    if (!attrs) {
      return this
    }
    this.id = attrs.id
    this.name = attrs.name
  }
}
