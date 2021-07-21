import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor(
        private readonly messagesService: MessagesService,
    ) {}
    @Get('convo')
    async getConvo( @Query() query: any) {
        return await this.messagesService.getConvo(Number.parseInt(query.from), Number.parseInt(query.to));
    }
    @Post()
    async createConvo(@Body() body: any) {
        return await this.messagesService.create(body);
    }
}
