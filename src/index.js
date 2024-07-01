"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const mcmasterful_book_list_json_1 = require("/workspaces/mcm-books/mcmasterful-book-list.json");
const app = new koa_1.default();
const router = new koa_router_1.default();
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
router.get('/books', (ctx) => {
    ctx.body = mcmasterful_book_list_json_1.books;
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
