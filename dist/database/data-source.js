"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const board_entity_1 = require("../boards/entities/board.entity");
exports.LocalDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "sptmxm",
    entities: [board_entity_1.Board],
    synchronize: true,
    logging: false,
});
exports.LocalDataSource.initialize();
//# sourceMappingURL=data-source.js.map