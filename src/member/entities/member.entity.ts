import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['id'])
export class Member{
	@PrimaryGeneratedColumn()
	seq: number;

	@PrimaryColumn("varchar", {
		length: 30,
	})
	id: string;

	@Column("varchar", {
		length: 100,
	})
	pw: string;

	@Column("varchar", {
		length: 10,
	})
	nm: string;

}