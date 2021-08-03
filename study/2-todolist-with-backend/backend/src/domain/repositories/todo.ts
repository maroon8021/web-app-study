import { EntityRepository, Repository } from "typeorm"
import { Todo } from "../models"

/**
 * Todoのリポジトリ
 *
 * @see https://typeorm.io/#/custom-repository
 */
@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  // --- このモデル固有で必要なメソッドがあれば追加してください ---
}
