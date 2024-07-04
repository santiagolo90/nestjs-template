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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const audits_service_1 = require("./audits.service");
const audit_entity_1 = require("../entities/audit.entity");
let AuditsController = class AuditsController {
    constructor(auditService) {
        this.auditService = auditService;
    }
    async findAll() {
        return await this.auditService.findAll();
    }
    async getOneUser(id) {
        if (!id) {
            return new common_1.BadRequestException("id is required");
        }
        const audit = await this.auditService.findById(id);
        if (!audit) {
            return new common_1.NotFoundException("Audit not found");
        }
        return audit;
    }
    create() {
        return 'create audit!';
    }
};
exports.AuditsController = AuditsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuditsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Audit' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'audit id',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ok',
        type: audit_entity_1.Audit,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Audit not found' }),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuditsController.prototype, "getOneUser", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuditsController.prototype, "create", null);
exports.AuditsController = AuditsController = __decorate([
    (0, swagger_1.ApiTags)('Audit'),
    (0, common_1.Controller)('audits'),
    __metadata("design:paramtypes", [audits_service_1.AuditsService])
], AuditsController);
//# sourceMappingURL=audits.controller.js.map