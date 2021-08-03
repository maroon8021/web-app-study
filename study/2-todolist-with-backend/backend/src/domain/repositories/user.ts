import { EntityRepository, Repository } from "typeorm"
import { User } from "../models"

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // --- このモデル固有で必要なメソッドがあれば追加してください ---
}
