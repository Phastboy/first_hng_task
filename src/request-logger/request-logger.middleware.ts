import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(RequestLoggerMiddleware.name);

    use(req: Request, res: Response, next: NextFunction) {
        const { method, originalUrl, body } = req;

        this.logger.log(`Request: ${method} ${originalUrl}`);
        if (body && typeof body === 'object' && Object.keys(body).length > 0) {
            this.logger.log(`Body: ${JSON.stringify(body)}`);
        }

        next();
    }
}
