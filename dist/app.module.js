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
const boards_module_1 = require("./boards/boards.module");
const auth_module_1 = require("./auth/auth.module");
const boards2_module_1 = require("./boards2/boards2.module");
const mytypeorm_module_1 = require("./mytypeorm/mytypeorm.module");
const auth_cookie_module_1 = require("./auth-cookie/auth-cookie.module");
const member_module_1 = require("./member/member.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            boards_module_1.BoardsModule,
            auth_module_1.AuthModule,
            boards2_module_1.Boards2Module,
            mytypeorm_module_1.MytypeormModule,
            auth_cookie_module_1.AuthCookieModule,
            member_module_1.MemberModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map