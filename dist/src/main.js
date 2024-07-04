"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const tracing_1 = require("./tracing");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nestjs API Template')
        .setDescription('TIBA Nestjs API Template')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            tagsSorter: 'alpha',
            operationsSorter: 'method',
        },
    });
    await tracing_1.default.start();
    app.enableCors();
    await app.listen(port);
    console.log(`Listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map