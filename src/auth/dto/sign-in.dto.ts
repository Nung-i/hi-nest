import { IsNotEmpty, IsString } from "class-validator";


export class SignInDto{
	@IsNotEmpty()
	@IsString()
	id: string;

	@IsNotEmpty()
	@IsString()
	pw: string;

}