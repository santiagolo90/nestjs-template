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
exports.Audit = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Audit = class Audit {
};
exports.Audit = Audit;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'Primary key ID',
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Audit.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '/test',
        description: 'route',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Audit.prototype, "route", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '192.168.1.1',
        description: 'ip',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Audit.prototype, "ip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'post',
        description: 'method',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Audit.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'NestJS',
        description: 'Origin',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Audit.prototype, "origin", void 0);
exports.Audit = Audit = __decorate([
    (0, typeorm_1.Entity)({ schema: 'nesttest', name: 'audits' })
], Audit);
//# sourceMappingURL=audit.entity.js.map