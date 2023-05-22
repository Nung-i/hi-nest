import { Module, ValidationPipe } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { Boards2Module } from './boards2/boards2.module';
import { MytypeormModule } from './mytypeorm/mytypeorm.module';
import { AuthCookieModule } from './auth-cookie/auth-cookie.module';
import { MemberModule } from './member/member.module';


// @Module({
// 	imports: [
// 		BoardsModule,
// 		AuthModule,
// 		Boards2Module,
// 	],
// 	providers: [
// 	],
// })

@Module({
	imports: [
		// TypeOrmModule.forRoot({
		// 	type: "mysql",
		// 	host: "localhost",
		// 	port: 3306,
		// 	username: "root",
		// 	password: "",
		// 	database: "sptmxm",
		// 	// entities: [Board],
		// 	synchronize: false,
		// 	logging: false,
		// 	autoLoadEntities: true,
		// }),
		// TypeOrmModule.forRoot(),
		BoardsModule,
		AuthModule,
		Boards2Module,
		MytypeormModule,
		AuthCookieModule,
		MemberModule,
	],
})

// @Module({
// 	imports: [
// 		BoardsModule,
// 	],
// })

export class AppModule { }
