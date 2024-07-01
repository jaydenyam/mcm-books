import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import bookList from '/workspaces/mcm-books/mcmasterful-book-list.json';
import { error } from 'console';

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

router.get('/books', (ctx) => {
    console.log('GET /books endpoint hit');
    ctx.body = bookList;  // Using the entire JSON content
});

// Optional: Error handling middleware
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = { message: err.message };
        ctx.app.emit('error', err, ctx);
    }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});