import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication<App>;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.body).toHaveProperty(
                    'email',
                    'stationphast@gmail.com',
                );
                expect(res.body).toHaveProperty('current_datetime');
                expect(res.body.current_datetime).toMatch(
                    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
                );
                expect(res.body).toHaveProperty(
                    'github_url',
                    'https://github.com/Phastboy/first_hng_task',
                );
            });
    });
});
