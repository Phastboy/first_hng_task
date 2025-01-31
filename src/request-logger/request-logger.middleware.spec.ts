import { RequestLoggerMiddleware } from './request-logger.middleware';
import { Logger } from '@nestjs/common';

describe('RequestLoggerMiddleware', () => {
    let middleware: RequestLoggerMiddleware;
    let loggerSpy: jest.SpyInstance;

    beforeEach(() => {
        middleware = new RequestLoggerMiddleware();
        loggerSpy = jest.spyOn(Logger.prototype, 'log').mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should be defined', () => {
        expect(middleware).toBeDefined();
    });

    it('should log request method and endpoint', () => {
        const req = { method: 'GET', originalUrl: '/test', body: {} } as any;
        const res = {} as any;
        const next = jest.fn();

        middleware.use(req, res, next);

        expect(loggerSpy).toHaveBeenCalledWith('Request: GET /test');
        expect(next).toHaveBeenCalled();
    });

    it('should log request body if present', () => {
        const req = { method: 'POST', originalUrl: '/submit', body: { name: 'John Doe' } } as any;
        const res = {} as any;
        const next = jest.fn();

        middleware.use(req, res, next);

        expect(loggerSpy).toHaveBeenCalledWith('Request: POST /submit');
        expect(loggerSpy).toHaveBeenCalledWith('Body: {"name":"John Doe"}');
        expect(next).toHaveBeenCalled();
    });

    it('should not log body if it is empty', () => {
        const req = { method: 'DELETE', originalUrl: '/remove', body: {} } as any;
        const res = {} as any;
        const next = jest.fn();

        middleware.use(req, res, next);

        expect(loggerSpy).toHaveBeenCalledWith('Request: DELETE /remove');
        expect(loggerSpy).not.toHaveBeenCalledWith(expect.stringContaining('Body:'));
        expect(next).toHaveBeenCalled();
    });

    it('should handle undefined request body', () => {
        const req = { method: 'GET', originalUrl: '/test', body: undefined } as any;
        const res = {} as any;
        const next = jest.fn();

        middleware.use(req, res, next);

        expect(loggerSpy).toHaveBeenCalledWith('Request: GET /test');
        expect(loggerSpy).not.toHaveBeenCalledWith(expect.stringContaining('Body:'));
        expect(next).toHaveBeenCalled();
    });
});
