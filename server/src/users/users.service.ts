import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Pancake, Prisma } from '@prisma/client'
import { CreateUserDto } from './users.dto';
import { sha256 } from 'js-sha256';
@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async create(data: Prisma.PancakeCreateInput): Promise<Pancake> {
        data.password = sha256(data.password)
        return await this.prisma.pancake.create({ data });
    }
    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PancakeWhereUniqueInput;
        where?: Prisma.PancakeWhereInput;
        orderBy?: Prisma.PancakeOrderByInput;
    }): Promise<Pancake[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.pancake.findMany({
            cursor,
            where,
            orderBy,
            skip,
            take,
        });
    }
}
