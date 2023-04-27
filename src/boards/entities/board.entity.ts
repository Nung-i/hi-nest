import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";
import { BoardStatus } from "../boartd.-status.enum";

@Entity()
export class Board{
	@PrimaryGeneratedColumn()
	seq: number;

	@Column("varchar", {
		length: 100,
	})
	title: string;

	@Column("text")
	content: string;

	@Column("enum", {
		enum: BoardStatus,
		default: BoardStatus.PUBLIC,
	})
	status: BoardStatus;

}