import { BadRequestException, NotFoundException } from '@nestjs/common';
import { AuditsService } from './audits.service';
import { Audit } from 'src/entities/audit.entity';
export declare class AuditsController {
    private auditService;
    constructor(auditService: AuditsService);
    findAll(): Promise<Audit[]>;
    getOneUser(id: number): Promise<Audit | BadRequestException | NotFoundException>;
    create(): string;
}
