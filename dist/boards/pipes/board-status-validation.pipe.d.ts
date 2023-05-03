import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boartd.-status.enum";
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: BoardStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
