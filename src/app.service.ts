import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): { email: string; current_time: string; github_url: string } {
        const current_time = new Date().toISOString().split('.')[0] + 'Z';
        return {
            email: 'stationphast@gmail.com',
            current_time,
            github_url: 'https://github.com/Phastboy/first_hng_task',
        };
    }
}
