import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from 'src/app.service';
export declare class AuditMiddleware implements NestMiddleware {
    private auditService;
    private readonly ORIGIN;
    constructor(auditService: AppService);
    use(req: Request, res: Response, next: NextFunction): void;
    private addAudit;
}
