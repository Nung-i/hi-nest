import { Board } from './entities/board.entity';
export declare class BoardsService {
    constructor();
    inputBoard(): Promise<void>;
    getBoardRow(seq: number): Promise<Board>;
    getBoardAll(): Promise<Board[]>;
}
