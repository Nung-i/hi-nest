import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from "@/boards/entities/board.entity";
import { LocalDataSource } from "@/database/data-source";


@Module({
	imports: [
		BoardsModule,
	],
})

// @Module({
// 	imports: [
// 		TypeOrmModule.forRoot({
// 			type: "mysql",
// 			host: "localhost",
// 			port: 3306,
// 			username: "root",
// 			password: "",
// 			database: "sptmxm",
// 			autoLoadEntities: true,
// 		}),
// 		BoardsModule,
// 	],
// })

// @Module({
// 	imports: [
// 		BoardsModule,
// 	],
// })

export class AppModule { }
