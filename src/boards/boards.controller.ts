import { Controller, ValidationPipe } from '@nestjs/common';
import { Get, Post, Body, Param, Delete, Patch, UsePipes } from '@nestjs/common/decorators';
import { Board } from './entities/board.entity';
import { BoardsService } from './boards.service';
import { BoardStatus } from './boartd.-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
	constructor(private boardsService: BoardsService){}

	@Get(":seq")
	getBoardRow(@Param("seq") seq: number): Promise<Board>{
		return this.boardsService.getBoardRow(seq);

	}

	@Get()
	getBoardAll(): Promise<Board[]>{
		return this.boardsService.getBoardAll();

	}

	@Post()
	inputBoard(@Body() body): void{
		this.boardsService.inputBoard(body);

	}

	// @Get()
	// getAllBoard(): Board[]{
	// 	return this.boardsService.getAllBoards();

	// }

	// @Post()
	// @UsePipes(ValidationPipe)
	// createBoard( 
	// 	@Body() createBoardDto: CreateBoardDto
	// ): Board{
	// 	return this.boardsService.createBoard(createBoardDto);

	// }

	// @Post()
	// @UsePipes(ValidationPipe)
	// createBoard( 
	// 	@Body() createBoardDto: CreateBoardDto
	// ){

	// }

	// @Get('/:id')
	// getBoardById(@Param('id') id: number): Promise <Board>{
	// 	return this.boardsService.getBoardById(id);

	// }

	// @Get('/:id')
	// getBoardById(@Param('id') id: string): Board{
	// 	return this.boardsService.getBoardById(id);

	// }

	// @Delete('/:id')
	// deleteBoard(@Param('id') id: string): void{
	// 	this.boardsService.deleteBoard(id);

	// }

	// @Patch('/:id/status')
	// updateBoardStatus(
	// 	@Param('id') id: string,
	// 	@Body('status', BoardStatusValidationPipe) status: BoardStatus
	// ){
	// 	return this.boardsService.updateBoardStatus(id, status);

	// }

}
