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
exports.Board = void 0;
const typeorm_1 = require("typeorm");
const boartd__status_enum_1 = require("../boartd.-status.enum");
let Board = class Board {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Board.prototype, "seq", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        length: 100,
    }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Board.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        enum: boartd__status_enum_1.BoardStatus,
        default: boartd__status_enum_1.BoardStatus.PUBLIC,
    }),
    __metadata("design:type", String)
], Board.prototype, "status", void 0);
Board = __decorate([
    (0, typeorm_1.Entity)()
], Board);
exports.Board = Board;
//# sourceMappingURL=board.entity.js.map