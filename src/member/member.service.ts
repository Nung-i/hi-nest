import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MemberService {
	constructor(
		@InjectRepository(Member) private memberRepository: Repository<Member>,
	){

	}

	async createMember(createMemberDto: CreateMemberDto): Promise<void>{
		const member = await this.memberRepository.create(createMemberDto);

		console.log(createMemberDto);
		console.log(member);

		try {
			await this.memberRepository.save(member);
			
		} catch (error) {
			console.log(error.code);
			
		}

	}

	async getMemberRow(seq: number, id: string,): Promise<Member>{
		const memberRow = this.memberRepository.findOneBy({
			seq: seq,
			id: id,
		});

		return memberRow;

	}

}
