import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    const userExisting = await this.prisma.user.findUnique({
      where: { username: createUserDto.username },
    });

    if (userExisting) {
      throw new ConflictException('username already exists');
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userCreated = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    return userCreated;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findUnique(username: string): Promise<User> {
    const userFound = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    return userFound;
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
