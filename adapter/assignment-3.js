"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assignment_2_1 = __importDefault(require("./assignment-2"));
;
;
// If multiple filters are provided, any book that matches at least one of them should be returned
// Within a single filter, a book would need to match all the given conditions
async function listBooks(filters) {
    throw new Error("Todo");
}
async function createOrUpdateBook(book) {
    return await assignment_2_1.default.createOrUpdateBook(book);
}
async function removeBook(book) {
    await assignment_2_1.default.removeBook(book);
}
const assignment = 'assignment-3';
exports.default = {
    assignment,
    createOrUpdateBook,
    removeBook,
    listBooks
};
