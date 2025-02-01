import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): { email: string; current_time: string; github_url: string } {
        const current_time = new Date().toISOString().split('.')[0] + 'Z';
        return {
            email: 'stationphast@gmail.com',
            current_time,
            github_url: 'https://github.com/Phastboy/first_hng_task',
        };
    }
}
