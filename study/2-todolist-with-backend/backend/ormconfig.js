const { DB_URL, DB_MIGRATION } = process.env

const isDbMigration = DB_MIGRATION === "true"

module.exports = {
  type: "postgres",
  entities: isDbMigration
    ? ["src/domain/models/**/*.ts"]
    : ["dist/domain/models/**/*.js"],
  migrations: isDbMigration ? ["migrations/**/*.ts"] : [],

  logging: true,
  synchronize: false,
  url: DB_URL,
}
