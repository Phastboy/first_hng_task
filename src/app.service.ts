import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): { email: string; current_datetime: string; github_url: string } {
        const current_datetime = new Date().toISOString().split('.')[0] + 'Z';
        return {
            email: 'stationphast@gmail.com',
            current_datetime,
            github_url: 'https://github.com/Phastboy/first_hng_task',
        };
    }
}
