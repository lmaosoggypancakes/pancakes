import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Message, Prisma } from '@prisma/client'
@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) {}
    
    async getConvo(senderId, receiverId): Promise<Message[]> {
        const query1 = await this.prisma.message.findMany({
            where: {
                senderId: senderId,
                receiverId: receiverId,
            },
        });
        const query2 = await this.prisma.message.findMany({
            where: {
                senderId: receiverId,
                receiverId: senderId,
            },
        });
        const messages = query1.concat(query2);
        return messages;
    }
    async create(data: Prisma.MessageCreateInput) {
        const message = await this.prisma.message.create({ data });
        return message;
    }
}
