import { Board } from './entities/board.entity';
import { BoardsService } from './boards.service';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    findAll(): Promise<Board[]>;
}
