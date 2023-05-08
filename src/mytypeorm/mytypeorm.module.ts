import { Board } from '@/boards/entities/board.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: "localhost",
			port: 3306,
			username: "root",
			password: "",
			database: "sptmxm",
			entities: [Board],
			synchronize: false,
			logging: false,
			// autoLoadEntities: true,
		}),
	],
})
export class MytypeormModule {}
