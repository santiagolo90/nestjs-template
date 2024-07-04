import { Audit } from 'src/entities/audit.entity';
import { Repository } from 'typeorm';
export declare class AuditsService {
    private auditRepsitory;
    constructor(auditRepsitory: Repository<Audit>);
    findAll(): Promise<Audit[]>;
    findById(id: number): Promise<Audit | undefined>;
}
