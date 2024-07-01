import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import bookList from '/workspaces/mcm-books/mcmasterful-book-list.json';

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

// Define the Book interface
interface Book {
    name: string;
    author: string;
    description: string;
    price: number;
    image: string;
}

router.get('/books', (ctx) => {
    console.log('GET /books endpoint hit');
    ctx.body = bookList;  // Using the entire JSON content
});

router.post('/books', (ctx) => {
    const newBook = ctx.request.body as Book;
    bookList.push(newBook);
    ctx.body = newBook;
});

router.put('/books/:name', (ctx) => {
    const name = ctx.params.name;
    const updatedBook = ctx.request.body as Book;
    const index = bookList.findIndex(book => book.name === name);
    if (index !== -1) {
        bookList[index] = updatedBook;
        ctx.body = updatedBook;
    } else {
        ctx.status = 404;
        ctx.body = { message: 'Book not found' };
    }
});

router.delete('/books/:name', (ctx) => {
    const name = ctx.params.name;
    const index = bookList.findIndex(book => book.name === name);
    if (index !== -1) {
        const deletedBook = bookList.splice(index, 1);
        ctx.body = deletedBook;
    } else {
        ctx.status = 404;
        ctx.body = { message: 'Book not found' };
    }
});

// Optional: Error handling middleware
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        const appErr = err as { status?: number, message: string };  // Type assertion
        ctx.status = appErr.status || 500;
        ctx.body = { message: appErr.message };
        ctx.app.emit('error', appErr, ctx);
    }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});