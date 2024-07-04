"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: process.env.DB_TYPE == 'mysql' ? 'mysql' : 'mariadb',
    host: process.env.DOMAIN,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: process.env.DB_SYNC ? true : false,
};
//# sourceMappingURL=ormconfig.js.map