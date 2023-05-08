import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    findAll(): Promise<Board[]>;
}
