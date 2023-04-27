import "reflect-metadata";

import { DataSource } from "typeorm";
import { Board } from "@/boards/entities/board.entity";

const LocalDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "",
	database: "sptmxm",
	entities: [Board],
	synchronize: false,
	logging: false,
})
.initialize();
	// .initialize()
	// .then(() => {
	// 	console.log("Data Source has been initialized!")
	// })
	// .catch((err) => {
	// 	console.error("Error during Data Source initialization", err)
	// });

export { LocalDataSource }

// LocalDataSource.initialize()
// 	.then(() => {

// 	})
// 	.catch((error) => {

// 	});






// import { DataSource, DataSourceOptions } from "typeorm";

// export const localDataSourceOptions: DataSourceOptions = {
// 	type: "mysql",
// 	host: "localhost",
// 	port: 3306,
// 	username: "root",
// 	password: "",
// 	database: "sptmxm",
// 	entities: ["dist/**/*.entity.ts"],
// 	synchronize: false,
// 	logging: false,
// }

// const localDataSource = new DataSource(localDataSourceOptions);

// export { localDataSource }