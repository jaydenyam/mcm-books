"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assignment_1_1 = __importDefault(require("./assignment-1"));
;
async function listBooks(filters) {
    return assignment_1_1.default.listBooks(filters);
}
async function createOrUpdateBook(book) {
    throw new Error("Todo");
}
async function removeBook(book) {
    throw new Error("Todo");
}
const assignment = "assignment-2";
exports.default = {
    assignment,
    createOrUpdateBook,
    removeBook,
    listBooks
};
