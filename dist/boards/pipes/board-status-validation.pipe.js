"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const boartd__status_enum_1 = require("../boartd.-status.enum");
class BoardStatusValidationPipe {
    constructor() {
        this.StatusOptions = [
            boartd__status_enum_1.BoardStatus.PRIVATE,
            boartd__status_enum_1.BoardStatus.PUBLIC,
        ];
    }
    transform(value, metadata) {
        console.log('value', value);
        console.log('metadata', metadata);
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} isn't in the status options`);
        }
        return value;
    }
    isStatusValid(status) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
//# sourceMappingURL=board-status-validation.pipe.js.map