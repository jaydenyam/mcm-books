export interface Book {
    name: string,
    author: string,
    description: string,
    price: number,
    image: string,
};


// If you have multiple filters, a book matching any of them is a match.
async function listBooks(filters?: Array<{from?: number, to?: number}>) : Promise<Book[]>{
    console.log(filters)
    if (filters) {
        if (filters.length === 0 ){
            const books = await fetch("http://localhost:3000/books");
            //console.log(books.json());
            return books.json() as Promise<Book[]>;
        } else {
            const books = await fetch("http://localhost:3000/books/filter", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(filters),
            })
            return books.json() as Promise<Book[]>;
        }
    } else {
        return new Promise<Book[]>((resolve) => {
            resolve([]);
        });
    }    
}

const assignment = "assignment-1";

export default {
    assignment,
    listBooks
};