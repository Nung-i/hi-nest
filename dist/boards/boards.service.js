"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_entity_1 = require("./entities/board.entity");
const data_source_1 = require("../database/data-source");
let BoardsService = class BoardsService {
    constructor() {
    }
    async inputBoard(createBoardDto) {
        const boardRepository = data_source_1.LocalDataSource.getRepository(board_entity_1.Board);
        const board = new board_entity_1.Board();
        board.title = createBoardDto.title;
        board.content = createBoardDto.content;
        await boardRepository.save(board);
    }
    async getBoardRow(seq) {
        const boardRepository = data_source_1.LocalDataSource.getRepository(board_entity_1.Board);
        const boardRow = await boardRepository.findOneBy({
            seq: seq,
        });
        return boardRow;
    }
    async getBoardAll() {
        const boardRepository = data_source_1.LocalDataSource.getRepository(board_entity_1.Board);
        const boardAll = await boardRepository.find();
        return boardAll;
    }
    async modifyBoard() {
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map