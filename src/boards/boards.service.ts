import { Body, Inject, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';
// import { localDataSource } from '@/database/data-source';
import { localDataSource } from "@/database/data-source";
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';

@Injectable() // 다른 컴포넌트에서 이 서비스를 사용할 수 있게 injectable 해준다
export class BoardsService {
	constructor(
		@InjectRepository(Board) private boardRepository: Repository<Board>,
	){

	}

	async findAll(): Promise<Board[]> {
		return this.boardRepository.find();
		// const boardRepository = localDataSource.getRepository(Board);

		// const boardAll = await boardRepository.find();

		// return boardAll;
		
	}

	// async inputBoard(createBoardDto: CreateBoardDto): Promise<void>{
		// const boardRepository = localDataSource.getRepository(Board);

		// const board = new Board();

		// board.title = createBoardDto.title;
		// board.content = createBoardDto.content;

		// // await boardRepository.save(board);
		// await boardRepository.save(board);

	// }

	// async getBoardRow(seq: number): Promise<Board> {
		// const boardRepository = localDataSource.getRepository(Board);

		// const boardRow = await boardRepository.findOneBy({
		// 	seq: seq,
		// });

		// return boardRow;
		
	// }

	// async getBoardAll(): Promise<Board[]> {
		// const boardRepository = localDataSource.getRepository(Board);

		// const boardAll = await boardRepository.find();

		// return boardAll;
		
	// }

	// async modifyBoard(): Promise<void>{
		 
	// }

	// async getBoardById(id: number): Promise <Board> {
	// 	const found = await this.boardRepository.find({
	// 		select: {
	// 			id: id,
	// 		}
	// 	});

	// 	if(!found){
	// 		throw new NotFoundException(`Cat't find Board with id ${id}`);
			

	// 	}

	// 	return found;
		
	// }

	// private boards: Board[] = [];

	// getAllBoards(): Board[]{
	// 	return this.boards;

	// }

	// createBoard(createBoardDto: CreateBoardDto): Board{
	// 	const {title, description} = createBoardDto;

	// 	const board: Board = {
	// 		id: uuid(),
	// 		title: title,
	// 		description,
	// 		status: BoardStatus.PUBLIC,
	// 	}

	// 	this.boards.push(board);

	// 	return board;

	// }

	// getBoardById(id: string): Board{
	// 	const findBoard = this.boards.find((board) => board.id === id);

	// 	if( !findBoard ){
	// 		throw new NotFoundException(`Cat't find Board with id ${id}`);

	// 	}

	// 	return findBoard;

	// }

	// deleteBoard(id: string): void{
	// 	this.boards = this.boards.filter((board) => board.id !== id);

	// }

	// updateBoardStatus(id: string, status: BoardStatus): Board{
	// 	const board = this.getBoardById(id);

	// 	board.status = status;

	// 	return board;

	// }

}
