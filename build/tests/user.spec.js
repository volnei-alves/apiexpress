"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../api/services/user"));
describe('Users', () => {
    it('user response test', () => {
        const response = (0, user_1.default)();
        expect(response).toEqual('hello word');
    });
});
