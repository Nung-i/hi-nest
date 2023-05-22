import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '../member/entities/member.entity';
import { Repository } from 'typeorm';
import { CreateMemberDto } from '@/member/dto/create-member.dto';
import * as bcrypt from "bcrypt";
import { SignInDto } from '@/auth/dto/sign-in.dto';
import { JwtService } from "@nestjs/jwt";
import { Response } from 'express';

@Injectable()
export class AuthCookieService {
	constructor(
		@InjectRepository(Member) private memberRepository: Repository<Member>,
		private jwtService: JwtService,
	){

	}

	async signUp(createMemberDto: CreateMemberDto): Promise<void>{
		const {id, pw, nm} = createMemberDto;

		const member = await this.memberRepository.create(createMemberDto);

		const bcryptSalt = await bcrypt.genSalt();
		const hashedPw = await bcrypt.hash(pw, bcryptSalt);
		member.pw = hashedPw;

		try {
			await this.memberRepository.save(member);
			
		} catch (error) {
			console.log(error.code);

			if( error.code==='ER_DUP_ENTRY' ){
				console.error(`아이디 중복`);

			}
			
		}

	}

	async signIn(signInDto: SignInDto, @Res({passthrough: true}) response: Response): Promise<{accessToken: string}>{
		let resSignIn = {accessToken: 'fail'};

		const {id, pw} = signInDto;

		const member = await this.memberRepository.findOne({
			where: {
				id: id,
			}
		});

		if( member ){
			
			try{
				const compare_pw = await bcrypt.compare(pw, member.pw);

				if( compare_pw ){
					/* 유저토큰 생성 */
					response.cookie('home', {id: id});

					/* 유저 쿠키 생성 (secret + payload) */
					const payload = {
						id: id,
					};
					const accessToken = await this.jwtService.sign(payload);

					resSignIn = {accessToken: accessToken};

				}
	
			}catch(e){
				console.log(e);
	
			}

		}

		return resSignIn;

	}

}
