import { EntityRepository, Repository } from "typeorm"
import { UserType } from "../models"

@EntityRepository(UserType)
export class UserTypeRepository extends Repository<UserType> {
  // --- このモデル固有で必要なメソッドがあれば追加してください ---
}
