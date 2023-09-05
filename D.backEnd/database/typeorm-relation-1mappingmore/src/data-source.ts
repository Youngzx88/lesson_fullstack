import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entity/Department"
import { Employee } from "./entity/Employee"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "typeorm-test",
    synchronize: true,
    logging: true,
    entities: [Department,Employee],
    migrations: [],
    subscribers: [],
})
