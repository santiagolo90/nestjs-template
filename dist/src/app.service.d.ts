import { Audit } from './entities/audit.entity';
import { Repository } from 'typeorm';
import { AuditDto } from './audits/dto/audit.dto';
export declare class AppService {
    private auditRepsitory;
    constructor(auditRepsitory: Repository<Audit>);
    getHealth(): string;
    createAudit(audit: AuditDto): Promise<Audit>;
}
