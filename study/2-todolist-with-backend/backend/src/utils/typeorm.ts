import { Connection, getConnectionManager, createConnection } from "typeorm"

export const connect = async (): Promise<Connection> => {
  const CONNECTION_NAME = "default"
  const connectionManager = getConnectionManager()

  // Lambda上でconnectionが残り続けることがありうるため、すでにconnectionが存在してるかどうかチェックする
  if (connectionManager.has(CONNECTION_NAME)) {
    console.log("Connection of 'default' is already exists")
    const connection = connectionManager.get(CONNECTION_NAME)

    if (!connection.isConnected) {
      console.log(
        "Connection of 'default' has NOT established and try to connect"
      )
      return connection.connect()
    }
    return connection
  }

  // ここで作られたConnectionは、TypeORMがexportしているgetConnectionを呼べば、いつでも取り出せる。
  // そのため、ここで作られたConnectionをどこかで保管・管理するための自前の実装は必要ない。
  // https://typeorm.io/#/connection/creating-a-new-connection
  return createConnection()
}
