import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateMemberDto{
	@IsNotEmpty()
	@IsString()
	id: string;

	@IsNotEmpty()
	@IsString()
	pw: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(2, {
		message: '이름은 2글자 이상이여야 합니다.',
	})
	@MaxLength(10, {
		message: '이름은 10글자 이하이여야 합니다.',
	})
	@Matches(/^[a-zA-Z0-9!@#$%^&*()-=_+]*$/, {
		message: '저런',
	})
	nm: string;

}