import { Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Get, Post, Req, Res } from "@nestjs/common/decorators";
import { SignUpDto } from './dto/sign-up.dto';
import { AuthCookieService } from './auth-cookie.service';
import { CreateMemberDto } from '@/member/dto/create-member.dto';
import { SignInDto } from '@/auth/dto/sign-in.dto';
import { Request, Response } from 'express';

@Controller('auth-cookie')
export class AuthCookieController {
	constructor(
		private authCookieService: AuthCookieService,
	){

	}

	@Post('sign-up')
	@UsePipes(ValidationPipe)
	async signUp(@Body() createMemberDto: CreateMemberDto): Promise<void>{
		this.authCookieService.signUp(createMemberDto);

	}

	@Post('sign-in')
	@UsePipes(ValidationPipe)
	async signIn(@Body() signInDto: SignInDto
		, @Req() request: Request, @Res({passthrough: true}) response: Response
	): Promise<{accessToken: string}>{
		let resSignIn;

		const {home} = request.cookies;

		if( home ){
			resSignIn = `logined`;

		}else{
			resSignIn = this.authCookieService.signIn(signInDto, response);

		}

		console.log(request.cookies);
		console.log(home);

		return resSignIn;

	}

	@Get('login-out')
	async loginOut(@Req() request: Request, @Res({passthrough: true}) response: Response ){
		await response.clearCookie('asdf');

		console.log(request.cookies);

	}

}
