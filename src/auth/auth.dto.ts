import { User } from '.prisma/client';
import { IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(2, 30)
  username: string;

  @IsString()
  @Length(8, 50)
  password: string;
}

export class AuthResponseDto {
  token: string;
  user: User;
}
