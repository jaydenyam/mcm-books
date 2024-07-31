import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import fs from 'fs';
import path from 'path';
import cors from '@koa/cors';

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

// Define the Book type
type Book = {
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
};

interface Filter {
  to?: number;
  from?: number;
}

// Load book data
const booksFilePath = './mcmasterful-book-list.json';
let books: Book[] = [];
// fs.readdirSync(".").forEach(file => console.log(file));
try {
  const data = fs.readFileSync(booksFilePath, 'utf8');
  books = JSON.parse(data);
  console.log('Books loaded:', books); // Debug log to confirm books are loaded
} catch (err) {
  console.error('Error reading book list file:', err);
}

// Route to get all books
router.get('/books', (ctx) => {
  console.log('GET /books route hit'); // Debug log to confirm route is hit
  ctx.body = books;
});

// Route to filter books by price range
router.post('/books/filter', (ctx) => {
  console.log('GET /books/filter route hit'); // Debug log to confirm route is hit
  let returnBooks: Book[] = []
  const body = ctx.request.body as Filter[];
  for (let i = 0; i < body.length; i++) {
      let minPrice = body[i].from ? body[i].from : 0;
      let maxPrice = body[i].to ? body[i].to : Number.MAX_SAFE_INTEGER;
      const filteredBooks = books.filter(book => book.price >= minPrice! && book.price <= maxPrice!);
      returnBooks = returnBooks.concat(filteredBooks);
  }
  console.log(`Filtered books: ${JSON.stringify(returnBooks)}`); // Debug log to confirm filtering
  ctx.body = returnBooks;
});

// Route to add a new book
router.post('/books', (ctx) => {
  console.log('POST /books route hit'); // Debug log to confirm route is hit
  const newBook = ctx.request.body as Book; // Assert the type of newBook
  books.push(newBook);
  ctx.body = { message: 'Book added successfully' };
});

// Ensure the routes are registered
app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});