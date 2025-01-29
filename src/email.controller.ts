import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('send')
  async sendTestEmail(@Query('to') to: string) {
    console.log("Попали в контроллер sendTestEmail, дальше будем коннектится к emailService");
    return await this.emailService.sendTestEmail(to);
  }
}
