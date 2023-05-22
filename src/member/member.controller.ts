import { Controller, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Get, Post, Body, Param, Delete, Patch, UsePipes } from '@nestjs/common/decorators';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('member')
export class MemberController {
	constructor(
		private memberService: MemberService,
	){

	}

	@Post()
	@UsePipes(ValidationPipe)
	inputMember(@Body() createMemberDto: CreateMemberDto): void{
		this.memberService.createMember(createMemberDto);

	}

}
