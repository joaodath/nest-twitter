import {
  IsDateString,
  IsEmail,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  username: string;

  @IsString()
  @Length(8, 50)
  password: string;

  @IsString()
  @Length(2, 30)
  displayName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsUrl()
  img: string;

  @IsString()
  @Length(2, 280)
  bio: string;

  @IsDateString()
  birth: string;
}
