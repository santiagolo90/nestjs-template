"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditMiddleware = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const audit_dto_1 = require("../audits/dto/audit.dto");
let AuditMiddleware = class AuditMiddleware {
    constructor(auditService) {
        this.auditService = auditService;
        this.ORIGIN = 'NestJS';
    }
    use(req, res, next) {
        this.addAudit(req);
        next();
    }
    addAudit(req) {
        const auditDto = new audit_dto_1.AuditDto();
        auditDto.ip = req['socket']?.remoteAddress,
            auditDto.route = req.baseUrl;
        auditDto.method = req.method;
        auditDto.origin = this.ORIGIN;
        this.auditService.createAudit(auditDto);
    }
};
exports.AuditMiddleware = AuditMiddleware;
exports.AuditMiddleware = AuditMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AuditMiddleware);
//# sourceMappingURL=audit.middleware.js.map