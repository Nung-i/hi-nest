import { DataSource, Repository } from "typeorm";
import { Board } from "./entities/board.entity";
import { BoardStatus } from "./boartd.-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

/**
 * #### 더 이상 사용하지 않는 것
 * 
 * [@EntityRepository]
 * 
 * const userRepository = dataSource.getRepository(User).extend({})
 * 
 */

// @Injectable()
// export class BoardRepository extends Repository<Board>{
// 	constructor(
// 		private dataSource: DataSource
// 	){
// 		super(Board, dataSource.createEntityManager());
// 	}
	
// 	async createBoard(createBoardDto: CreateBoardDto){
// 		const {title, content} = createBoardDto;

// 		await this.dataSource.createQueryBuilder()
// 		.insert()
// 		.into(Board)
// 		.values([
// 			{title: title, content: content, status: BoardStatus.PUBLIC},
// 		])
// 		.execute()

// 	}

// }

const dataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'sptmxm',
	entities: [Board],
	synchronize: true,
})

export const BoardRepository = dataSource.getRepository(Board).extend({
	async createBoard(createBoardDto: CreateBoardDto){
		const {title, content} = createBoardDto;

		await this.dataSource.createQueryBuilder()
		.insert()
		.into(Board)
		.values([
			{title: title, content: content, status: BoardStatus.PUBLIC},
		])
		.execute()

	}

})