import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: Prisma.UserCreateInput) {
    return 'This action adds a new user';
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
