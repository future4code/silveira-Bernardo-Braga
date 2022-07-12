"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test("Should return false for empty name", () => {
    const result = (0, src_1.validateCharacter)({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
    });
    expect(result).toBe(false);
});
