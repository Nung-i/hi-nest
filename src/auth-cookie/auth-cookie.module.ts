import { Module } from '@nestjs/common';
import { AuthCookieService } from './auth-cookie.service';
import { AuthCookieController } from './auth-cookie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../member/entities/member.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'secret1234',
      signOptions: {
        expiresIn: 60*60,
      }
    }),
    TypeOrmModule.forFeature([Member]),
  ],
  providers: [AuthCookieService],
  controllers: [AuthCookieController]
})
export class AuthCookieModule {}
