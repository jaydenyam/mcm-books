"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assignment_3_1 = __importDefault(require("./assignment-3"));
;
;
// If multiple filters are provided, any book that matches at least one of them should be returned
// Within a single filter, a book would need to match all the given conditions
async function listBooks(filters) {
    throw new Error("Todo");
}
async function createOrUpdateBook(book) {
    return await assignment_3_1.default.createOrUpdateBook(book);
}
async function removeBook(book) {
    await assignment_3_1.default.removeBook(book);
}
async function lookupBookById(book) {
    throw new Error("Todo");
}
async function placeBooksOnShelf(bookId, numberOfBooks, shelf) {
    throw new Error("Todo");
}
async function orderBooks(order) {
    throw new Error("Todo");
}
async function findBookOnShelf(book) {
    throw new Error("Todo");
}
async function fulfilOrder(order, booksFulfilled) {
    throw new Error("Todo");
}
async function listOrders() {
    throw new Error("Todo");
}
const assignment = 'assignment-4';
exports.default = {
    assignment,
    createOrUpdateBook,
    removeBook,
    listBooks,
    placeBooksOnShelf,
    orderBooks,
    findBookOnShelf,
    fulfilOrder,
    listOrders,
    lookupBookById
};
