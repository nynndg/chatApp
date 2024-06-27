import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatService {
    private message: SendMessageDto[] = [];

    sendMessage(sendMessageDto: SendMessageDto) {
        this.message.push(sendMessageDto);
        return sendMessageDto;
    }

    getMessage() {
        return this.message;
    }
}
