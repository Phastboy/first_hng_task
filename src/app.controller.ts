import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): { email: string; current_datetime: string; github_url: string } {
        return this.appService.getHello();
    }
}
