import { Board } from './entities/board.entity';
import { BoardsService } from './boards.service';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getBoardRow(seq: number): Promise<Board>;
    getBoardAll(): Promise<Board[]>;
    inputBoard(): void;
}
