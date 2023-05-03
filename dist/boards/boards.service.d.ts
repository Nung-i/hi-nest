import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';
export declare class BoardsService {
    constructor();
    inputBoard(createBoardDto: CreateBoardDto): Promise<void>;
    getBoardRow(seq: number): Promise<Board>;
    getBoardAll(): Promise<Board[]>;
    modifyBoard(): Promise<void>;
}
