import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return the correct JSON response', () => {
            const response = appController.getHello();
            expect(response).toHaveProperty('email', 'stationphast@gmail.com');
            expect(response).toHaveProperty('current_time');
            expect(response.current_time).toMatch(
                /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
            );
            expect(response).toHaveProperty(
                'github_url',
                'https://github.com/Phastboy/first_hng_task',
            );
        });
    });
});
