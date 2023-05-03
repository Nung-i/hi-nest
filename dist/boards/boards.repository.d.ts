import { Repository } from "typeorm";
import { Board } from "./entities/board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
export declare const BoardRepository: Repository<Board> & {
    createBoard(createBoardDto: CreateBoardDto): Promise<void>;
};
