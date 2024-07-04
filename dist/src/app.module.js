"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const audits_module_1 = require("./audits/audits.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const audit_middleware_1 = require("./middleware/audit.middleware");
const audit_entity_1 = require("./entities/audit.entity");
const hello_module_1 = require("./hello/hello.module");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const nestjs_otel_1 = require("nestjs-otel");
const OpenTelemetryModuleConfig = nestjs_otel_1.OpenTelemetryModule.forRoot({
    metrics: {
        hostMetrics: true,
        apiMetrics: {
            enable: true,
            defaultAttributes: {
                custom: 'label',
            },
            ignoreRoutes: ['/favicon.ico', '/swagger'],
            ignoreUndefinedRoutes: false,
            prefix: 'nest_prefix',
        },
    },
});
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(audit_middleware_1.AuditMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            audits_module_1.AuditsModule,
            hello_module_1.HelloModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.DB_TYPE == 'mysql' ? 'mysql' : 'mariadb',
                host: process.env.DOMAIN,
                port: parseInt(process.env.DB_PORT, 10) || 3306,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
                synchronize: process.env.DB_SYNC ? true : false,
            }),
            typeorm_1.TypeOrmModule.forFeature([audit_entity_1.Audit]),
            nestjs_prometheus_1.PrometheusModule.register(),
            OpenTelemetryModuleConfig
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map