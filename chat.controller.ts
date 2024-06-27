import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Post('send')
    async sendMessage(@Body() sendMessageDto: SendMessageDto ) {
        return this.chatService.sendMessage(sendMessageDto);
        
    }

    @Get('messages')
    async getMessage() {
        return this.chatService.getMessage();
    }
}
