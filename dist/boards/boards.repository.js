"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("./entities/board.entity");
const boartd__status_enum_1 = require("./boartd.-status.enum");
const dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'sptmxm',
    entities: [board_entity_1.Board],
    synchronize: true,
});
exports.BoardRepository = dataSource.getRepository(board_entity_1.Board).extend({
    async createBoard(createBoardDto) {
        const { title, content } = createBoardDto;
        await this.dataSource.createQueryBuilder()
            .insert()
            .into(board_entity_1.Board)
            .values([
            { title: title, content: content, status: boartd__status_enum_1.BoardStatus.PUBLIC },
        ])
            .execute();
    }
});
//# sourceMappingURL=boards.repository.js.map